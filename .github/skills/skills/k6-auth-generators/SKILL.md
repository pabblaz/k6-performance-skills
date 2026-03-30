---
name: k6-auth-generators
description: Generates reusable authentication helpers for k6 tests (JWT, HMAC, API key) aligned with repository security and execution standards.
argument-hint: "Specify auth type and target path (for example: JWT helpers in global/utils/auth)."
---

# k6 Auth Generators

## Description
This skill generates reusable authentication helper modules for k6 test suites:

- JWT bearer token helper
- HMAC signature helper
- API key header helper

The generated files are intended for shared usage and should be placed under `global/` when reusable across modules.

## Workflow
1. **Collect requirements**: auth type, target path, header names, and algorithm details.
2. **Generate helper file(s)**: create minimal, focused modules with pure functions.
3. **Apply security rules**: read secrets from environment variables (`__ENV`) only.
4. **Place in shared path**: prefer `global/utils/` for cross-product reuse.
5. **Provide usage snippet**: show how test scripts import and use helpers safely.

## Security Guardrails
- Never hardcode secrets, tokens, private keys, or API keys.
- Use environment variables (`__ENV`) for credentials and secrets.
- Keep auth helpers deterministic and testable (no hidden global state).
- Do not log sensitive values.

## Repository Alignment
- Reusable cross-product helpers belong in `global/`.
- Keep logic separate from test scripts to avoid duplication.
- Continue executing tests with `global/scripts/run-k6.sh`.

## Usage
- "Generate JWT helper for k6 and place it in global/utils/auth"
- "Create HMAC SHA256 signing utility for my API tests"
- "Create API key header helper using __ENV variables"

## Assets
- `templates/token-generator.js`
- `templates/hmac-generator.js`
- `templates/api-key-generator.js`
- `examples/example-auth-usage.js`

## Quality Checklist
- Apply `../QUALITY-CHECKLIST.md` before finalizing generated outputs.
