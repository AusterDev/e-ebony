export type APIResponse<T> = {
    ok: boolean,
    error?: ErrorResponse,
    d: T | null
}

export type ErrorResponse = {
    type: "conflict" | "unauthorized" | "server_error" | "validation" | "signatureless" | "internal" | "warning" | "time" | "not_found",
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