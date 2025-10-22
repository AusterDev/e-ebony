function isSessionExpired(createdAt: Date, totalTimeMins: number): boolean {
    const expiry = createdAt.getTime() + totalTimeMins * 60 * 1000;
    return Date.now() > expiry;
}
 