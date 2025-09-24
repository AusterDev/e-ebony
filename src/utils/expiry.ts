function isSessionExpired(session: { createdAt: Date; mock: { totalTimeMins: number } }): boolean {
    const expiry = session.createdAt.getTime() + session.mock.totalTimeMins * 60 * 1000;
    return Date.now() > expiry;
}
