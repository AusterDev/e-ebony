const { startTasksLoop } = await import("../lib/tasks");

startTasksLoop();

console.log("Server startup: startTaskLoop (func:after)")

export { };
