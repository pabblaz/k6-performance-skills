# Sample API Module Boilerplate

## Structure
- `tests/`: k6 test scripts
- `scenarios/`: JSON scenario definitions
- `utils/`: module-specific helpers

## Run Example
Use the shared script:

```bash
./global/scripts/run-k6.sh nlo health-performance.js --config .github/skills/k6-boilerplate-generator/examples/sample-api-module/scenarios/load.json
```

Set required env var before execution:

```bash
export API_BASE_URL=https://example.test.local
```
