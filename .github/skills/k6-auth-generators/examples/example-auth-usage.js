import http from "k6/http";
import { check } from "k6";
import { buildBearerAuthFromEnv } from "../templates/token-generator.js";
import { buildApiKeyHeaders, mergeAuthHeaders } from "../templates/api-key-generator.js";

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.1"],
  },
};

export default function () {
  const bearer = buildBearerAuthFromEnv({ sub: "perf-user", role: "tester" });
  const apiKeyHeaders = buildApiKeyHeaders({ headerName: "x-api-key", keyEnv: "MY_API_KEY" });

  const headers = mergeAuthHeaders(
    {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    apiKeyHeaders,
  );

  const res = http.get(`${__ENV.API_BASE_URL}/health`, { headers });

  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}
