# Copilot Instructions

## Cleanup Policy
- Delete temporary/debug files before finishing (e.g., debug_*.py, test_temp.*)

## Code Style
- Python: snake_case files/functions, UPPER_CASE constants
- JavaScript: camelCase files/functions
- All comments in English, clear and concise
- Functions focused and under 20 lines

## Code Organization
- Structure: `adapters/`, `infrastructure/`, `tests/`, `config/`, `resources/`, `utils/`
- Separate data, logic, and configuration — no hardcoded config values
- Shared/reusable logic → `global/` directory
- Include `README.md` in each major product directory

## Code Reusability
- Avoid duplication; extract shared logic into reusable functions/modules
- Reusable cross-product logic must live in `global/`

## Execution Validation
- Always ensure test scripts are executed using `run-k6.sh`
