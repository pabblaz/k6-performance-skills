# Sample API Module Boilerplate

## Structure
- `tests/`: k6 test scripts
- `scenarios/`: JSON scenario definitions
- `utils/`: module-specific helpers

## Run Example
Use the shared script:

```bash
# Example after generating/copying this module into nlo/sample-api-module/
./global/scripts/run-k6.sh nlo health-performance.js --config nlo/sample-api-module/scenarios/load.json
```

Set required env var before execution:

```bash
export API_BASE_URL=https://example.test.local
```
