/**
 * Example k6 Browser Test (UI Level)
 * 
 * Demonstrates the standard structure and best practices for Browser UI performance tests.
 * Note: No scenario details ('stages', 'vus', 'executor') are hardcoded in the options object.
 * They should be provided via external JSON configuration during execution.
 */

import { Trend } from "k6/metrics";
import { Options } from "k6/options";
import { BaseBrowser } from "../../../../global/frontend/base-browser.ts";

const exampleTabChangeTime = new Trend("example_tab_change_time");

// ONLY thresholds and tags, no scenario configuration here.
export const options: Options = {
  thresholds: {
    example_tab_change_time: ["p(90)<2000"],
  },
};

export default async function (): Promise<void> {
  // Generate unique TEST_ID per iteration for observability correlation
  const TEST_ID = `example-ui-${Date.now()}-${__VU}-${__ITER}`;

  const browser = new BaseBrowser();
  const page = await browser.init();
  const iteration = __ITER;

  try {
    console.log(
      `[TEST_ID: ${TEST_ID}] 📊 Iteration ${iteration + 1}: Measuring navigation performance`,
    );

    // Set custom header BEFORE any navigation for OpenTelemetry correlation
    await page.setExtraHTTPHeaders({
      "X-Test-ID": TEST_ID,
    });

    const startTime = Date.now();

    // Example browser interaction
    await page.goto("http://localhost:8000/example", { waitUntil: 'load' });
    
    // Perform actions (in a real test, use Page Objects)
    // const myPage = new MyPage(page);
    // await myPage.doSomething();

    const endTime = Date.now();
    const duration = endTime - startTime;

    if (duration > 0) {
      exampleTabChangeTime.add(duration);
      console.log(
        `[TEST_ID: ${TEST_ID}] ⚡ Navigation took: ${duration}ms`,
      );
    }
  } catch (error: any) {
    console.error(
      `[TEST_ID: ${TEST_ID}] ❌ Iteration ${iteration + 1} failed:`,
      error,
    );

    throw error;
  } finally {
    try {
      await browser.closeBrowser();
      console.log(
        `[TEST_ID: ${TEST_ID}] ✅ Browser closed after each iteration`,
      );
    } catch (closeError: any) {
      console.warn(
        `[TEST_ID: ${TEST_ID}] ⚠️ Error closing browser:`,
        closeError.message || closeError,
      );
    }
  }
}
