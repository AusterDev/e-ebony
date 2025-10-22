import prisma from "./prisma.ts"

type Task = {
    name: string
    runEvery: number
    fn: () => Promise<void>
}

const TaskCycle: Task[] = [
    {
        name: "deleteExpiredItems",
        runEvery: 15 * (1000 * 60),     // check for expired items every 15 minutes.
        fn: async () => {
            const sessions = await prisma.mockSession.findMany(
                {
                    include: {
                        mock: true,
                    }
                }
            );

            const now = new Date();

            const expiredSessions = sessions.filter((session: { mock: { totalTimeMins: number }; createdAt: { getTime: () => number } }) => { 
                const expiryTime = new Date(session.createdAt.getTime() + session.mock.totalTimeMins * 60_000); 
                return (45 * 1000 * 60) >= (now.getTime() - expiryTime.getTime()); // grace period of 45 minutes
            });

            for (const session of expiredSessions) {
                await prisma.mockSession.delete({
                    where: { id: session.id, clerkID: session.clerkID },
                });
            }
        }
    }
]

/**
 * Start the tasks from TaskCycle and keep them running until the application crashes.
 */
export function startTasksLoop() {
  console.log("startTaskLoop (func) has been called");

  for (const item of TaskCycle) {
    let isRunning = false;

    const runTask = async () => {
      if (isRunning) {
        console.warn(`Skipping ${item.name}: still running`);
        return;
      }

      isRunning = true;
      console.log(`Running ${item.name}`);
      try {
        await item.fn();
      } catch (e) {
        console.error(`Error running ${item.name}`, e);
      } finally {
        isRunning = false;
      }
    };

    console.log(`Firing ${item.name}`)
    runTask();

    setInterval(runTask, item.runEvery);
  }
}
