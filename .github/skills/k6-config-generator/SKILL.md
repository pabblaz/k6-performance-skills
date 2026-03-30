---
name: k6-config-generator
description: Generates k6 scenario JSON configs for load, stress, spike, soak, and benchmark tests, aligned with repository standards.
argument-hint: "Specify test type, target path, and optional thresholds (for example: stress config for nqc/frontend/scenarios)."
---

# k6 Config Generator

## Description
This skill generates k6 configuration files in JSON format for common performance profiles:

- load
- stress
- spike
- soak
- benchmark

It is aligned with this repository's standards:

- Keep scenarios in JSON files under `scenarios/`
- Do not hardcode scenario executors/stages in test scripts
- Execute tests through `./global/scripts/run-k6.sh <product> <test-file> --config <module>/scenarios/<config>.json`

## Workflow
1. **Collect requirements**: test type, product/module path, and optional thresholds.
2. **Generate scenario JSON**: select executor and shape stages/rates per test type.
3. **Add thresholds**: include `http_req_duration` and `http_req_failed` defaults (customizable).
4. **Save in scenarios folder**: place file in `<module>/scenarios/` with a clear name.
5. **Provide run command**: output an execution example using `./global/scripts/run-k6.sh <product> <test-file> --config <module>/scenarios/<config>.json`.

## Defaults
- `http_req_duration`: `p(95)<1000`
- `http_req_failed`: `rate<0.1`
- Executors:
- Load/Stress/Spike/Soak: `ramping-arrival-rate`
- Benchmark: `constant-arrival-rate`

## Guardrails
- Never generate commands that run `k6` directly for this repository.
- Never embed secrets in config files.
- Keep generated JSON minimal and valid.

## Usage
- "Create a stress scenario JSON for nqc frontend"
- "Generate a soak config in nlo/qc/scenarios with p(95)<1500"
- "Create benchmark profile config and show the run-k6.sh command"

## Run Command Pattern
Use this repository command pattern in responses:

`./global/scripts/run-k6.sh <product> <test-file> --config <module>/scenarios/<config>.json`

## Examples
- `examples/load.json`
- `examples/stress.json`
- `examples/spike.json`
- `examples/soak.json`
- `examples/benchmark.json`

## Quality Checklist
- Apply `../QUALITY-CHECKLIST.md` before finalizing generated outputs.
