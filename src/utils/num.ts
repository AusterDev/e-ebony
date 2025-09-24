export function makeNum(val: string | undefined) {
    if (!val) return undefined;
    const trimmed = val.trim();

    if (trimmed !== "" && !isNaN(Number(trimmed))) {
        return Number(trimmed)
    }
    return null;
}