---
name: k6-performance-tests
description: >
  Use this skill whenever the user needs to create, edit, organize, or run k6 performance
  test scripts. Triggers include: writing k6 tests, defining load scenarios, structuring
  test directories, using k6 frontend modules, configuring execution via run-k6.sh, or
  any mention of "performance test", "load test", "k6", "scenarios", or "VUs".
---

# k6 Performance Tests

## Language & Naming
- Scripts written in **JavaScript** and **TypeScript**, camelCase naming (e.g., `qcNewEvents.js`, `qcPerformanceTest.js`)
- Test files located in `tests/` within the relevant module (e.g., `nlo/qc/tests/`)

## Scenarios & Options
- **CRITICAL**: Never hardcode scenario details (`stages`, `vus`, `duration`, `executor`) in the `options` object within test scripts.
- Define scenarios in separate **JSON files** under `scenarios/` (e.g., `scenarios/my_scenario.json`).
- Load scenarios dynamically via the `--config` flag at execution time (e.g., `./global/scripts/run-k6.sh <product> <test-file> --config <module>/scenarios/my_scenario.json`).
- The script's `options` object should only contain non-scenario configurations like `tags` or specific test `thresholds`.
- This ensures changing load profiles does not modify test logic.

## Execution
- All k6 executions **must** use `global/scripts/run-k6.sh` — never run k6 directly
- This ensures consistency across environments and centralizes execution config

## Frontend Interactions
- Use common interfaces from `global/frontend/` for all frontend k6 interactions
- Never duplicate frontend interaction logic across test scripts

## Directory Structure
```
<product>/
├── tests/          # k6 test scripts (camelCase .js files)
├── scenarios/      # JSON scenario configs
└── utils/          # test-specific data generation helpers

global/
├── scripts/
│   └── run-k6.sh   # single entry point for all k6 executions
└── frontend/       # shared frontend interaction interfaces
```

## Data Generation
- Randomize test data wherever possible to avoid reliance on fixed values
- Place data generation logic in `utils/` (module-level) or `global/` (if reusable across products)

## References & Examples
When creating new scripts or scenarios, use these template examples as your baseline:
- Example API Test: `examples/example-api-test.js`
- Example UI Browser Test: `examples/example-browser-test.ts`
- Example JSON Scenario: `examples/example_scenario.json`

## Quality Checklist
- Apply `../QUALITY-CHECKLIST.md` before finalizing generated outputs.
