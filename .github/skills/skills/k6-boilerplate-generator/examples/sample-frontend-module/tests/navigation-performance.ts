import { Trend } from "k6/metrics";
import { Options } from "k6/options";
import { BaseBrowser } from "../../../../../../global/frontend/base-browser.ts";

const pageLoadMs = new Trend("page_load_ms");

export const options: Options = {
  thresholds: {
    page_load_ms: ["p(95)<3000"],
    checks: ["rate>0.95"],
  },
};

export default async function (): Promise<void> {
  const baseUrl = __ENV.WEB_BASE_URL;
  if (!baseUrl) {
    throw new Error("Missing required env var: WEB_BASE_URL");
  }

  const browser = new BaseBrowser();
  const page = await browser.init();

  try {
    const start = Date.now();
    await page.goto(baseUrl, { waitUntil: "load" });
    pageLoadMs.add(Date.now() - start);
  } finally {
    await browser.closeBrowser();
  }
}
