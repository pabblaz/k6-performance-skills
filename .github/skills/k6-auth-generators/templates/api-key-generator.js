export function buildApiKeyHeaders({ headerName = "x-api-key", keyEnv = "API_KEY" }) {
  const apiKey = __ENV[keyEnv];
  if (!apiKey) {
    throw new Error(`Missing required env var: ${keyEnv}`);
  }
  return {
    [headerName]: apiKey,
  };
}

export function mergeAuthHeaders(baseHeaders, authHeaders) {
  return {
    ...(baseHeaders || {}),
    ...(authHeaders || {}),
  };
}
