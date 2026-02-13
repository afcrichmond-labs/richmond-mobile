/**
 * Adapter to handle both API v1 (flat) and v2 (envelope) responses.
 * Normalizes to v2 format for internal consumption.
 */
export function normalizeResponse<T>(response: any): { data: T; meta?: any } {
  if (response.data && response.meta) {
    return response; // Already v2 format
  }
  return { data: response, meta: { api_version: "v1" } };
}
