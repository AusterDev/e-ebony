export type APIResponse<T> = {
    ok: boolean,
    error?: ErrorResponse,
    d: T | null
}

type ErrorResponse = {
    type: "validation" | "signatureless" | "internal" | "warning" | "time",
    cause: any
}

export function apiResponse<T>(ok: boolean, d: T | null, error?: ErrorResponse) {
    const res: APIResponse<T> = {
        ok: ok,
        d: d,
        error: error
    }
    return JSON.stringify(res)
}