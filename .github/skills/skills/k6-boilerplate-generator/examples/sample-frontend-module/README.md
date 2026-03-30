# Sample Frontend Module Boilerplate

## Structure
- `tests/`: browser performance test scripts
- `scenarios/`: JSON load profile definitions

## Run Example
Use the shared script:

```bash
./global/scripts/run-k6.sh nqc navigation-performance.ts --config .github/skills/k6-boilerplate-generator/examples/sample-frontend-module/scenarios/load.json
```

Set required env var before execution:

```bash
export WEB_BASE_URL=https://example.test.local
```
