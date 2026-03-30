export function buildHealthQueryParams() {
  return {
    source: "k6",
    requestId: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
  };
}
