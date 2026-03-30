/**
 * Example k6 Performance Test (API Level)
 * 
 * Demonstrates the standard structure and best practices for API performance tests.
 * Note: No scenario details ('stages', 'vus', 'executor') are hardcoded in the options object.
 * They should be provided via external JSON configuration during execution.
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// ONLY thresholds and tags, no scenario configuration here.
export const options = {
  tags: {
    app_version: __ENV.APP_VERSION || 'unknown',
  },
  // Thresholds can optionally be placed here, or ideally in the scenario JSON
  thresholds: {
    'example_duration_ms': ['p(95)<500'],
    'example_success_rate': ['rate>0.99'],
  }
};

// Configuration
const API_URL = __ENV.API_URL || 'http://localhost:8000';
const ENDPOINT = `${API_URL}/example`;

// Performance metrics
const exampleDuration = new Trend('example_duration_ms');
const exampleSuccess = new Rate('example_success_rate');

export function setup() {
  // Setup runs once before the test starts (e.g., getting tokens, health checks)
  const res = http.get(`${API_URL}/health`);
  if (res.status !== 200) {
    throw new Error(`Example server unavailable: ${res.status}`);
  }
  
  // Return data needed for the test
  return { startTime: Date.now() };
}

export default function (data) {
  // Test iteration logic
  const response = http.post(
    `${ENDPOINT}`,
    JSON.stringify({ testData: 123 }),
    { headers: { 'Content-Type': 'application/json' } }
  );
  
  // Validate responses
  const success = check(response, {
    'status is 200': (r) => r.status === 200,
    'response under 500ms': (r) => r.timings.duration < 500,
  });
  
  // Record custom metrics
  exampleDuration.add(response.timings.duration);
  exampleSuccess.add(success ? 1 : 0);
  
  if (!success) {
    console.error(`❌ Example test failed: ${response.status} - ${response.body}`);
  }
  
  // Important: Always sleep to pace iterations
  sleep(1);
}

export function teardown(data) {
  // Optional cleanup block after all tests are done
  console.log(`Test finished. Started at: ${data.startTime}`);
}
