import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<1000"],
    http_req_failed: ["rate<0.1"],
  },
  tags: {
    module: "sample-api-module",
  },
};

export default function () {
  const baseUrl = __ENV.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("Missing required env var: API_BASE_URL");
  }

  const res = http.get(`${baseUrl}/health`);
  check(res, {
    "health status is 200": (r) => r.status === 200,
  });

  sleep(1);
}
