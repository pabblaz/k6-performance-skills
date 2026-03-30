---
name: k6-boilerplate-generator
description: Generates a lightweight k6 project scaffold aligned with this repository structure, shared modules, and run-k6.sh execution policy.
argument-hint: "Specify module type (api/frontend), target product path, and optional endpoints or user flow details."
---

# k6 Boilerplate Generator

## Description
This skill generates a lightweight k6 scaffold adapted to this repository conventions.

It supports:
- API test module scaffold
- Frontend browser test module scaffold
- Scenario JSON generation per profile
- Shared helper guidance for `global/`

## Repository Rules Enforced
- Keep scenario definitions in JSON under `scenarios/`.
- Do not hardcode scenario executors/stages inside test files.
- Reusable logic must go to `global/`.
- Use `global/scripts/run-k6.sh` for execution.

## Output Structure (Light)
For API modules:

```text
<module>/
├── tests/
│   └── <feature>-performance.js
├── scenarios/
│   └── <profile>.json
├── utils/
│   └── data-generator.js
└── README.md
```

For frontend modules:

```text
<module>/
├── tests/
│   └── <flow>-performance.ts
├── scenarios/
│   └── <profile>.json
└── README.md
```

## Workflow
1. Collect target module path and type (`api` or `frontend`).
2. Generate minimal test file(s) with thresholds only in `options`.
3. Generate scenario JSON profiles (`load`, `stress`, `spike`, `soak`, or custom).
4. Add module README with run command examples via `run-k6.sh`.
5. If auth/data helpers are shared, place or reference them in `global/`.

## Guardrails
- Never generate direct `k6 run` commands as the primary execution path.
- Never hardcode secrets in tests or utility files.
- Keep boilerplate concise and ready to extend.

## Usage
- "Generate an API boilerplate for nlo/qc"
- "Create frontend boilerplate for nqc/frontend with load and stress scenarios"
- "Generate a new module scaffold from these endpoints"

## Assets
- `examples/sample-api-module/README.md`
- `examples/sample-api-module/tests/health-performance.js`
- `examples/sample-api-module/scenarios/load.json`
- `examples/sample-api-module/utils/data-generator.js`
- `examples/sample-frontend-module/README.md`
- `examples/sample-frontend-module/tests/navigation-performance.ts`
- `examples/sample-frontend-module/scenarios/load.json`

## Quality Checklist
- Apply `../QUALITY-CHECKLIST.md` before finalizing generated outputs.
