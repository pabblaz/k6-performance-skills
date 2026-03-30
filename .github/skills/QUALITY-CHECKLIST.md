# Skills Quality Checklist

Use this checklist before finalizing any skill output.

## Core Rules
- Keep outputs aligned with repository structure and naming conventions.
- Avoid duplicated logic; move reusable pieces to `global/`.
- Keep examples minimal, executable, and easy to adapt.
- Do not include temporary or debug files.

## Security
- Never hardcode credentials, secrets, tokens, or private keys.
- Prefer environment variables (`__ENV`) for sensitive values.
- Do not log sensitive values in examples or templates.

## k6 Standards
- Keep scenario profiles in JSON under `scenarios/`.
- Do not hardcode executors, stages, vus, or duration in test scripts.
- Use `global/scripts/run-k6.sh` as the execution entrypoint.

## Frontend Test Standards
- Follow the same frontend testing guidelines used in `nqc/frontend`.
- Page objects must inherit from `global/frontend/base-page.ts` (`base-page.js` in compiled output), which encapsulates interaction with the `Page` object from `k6/browser`.
- Use `global/frontend/base-browser.ts` (`base-browser.js` in compiled output) as the interface for interactions with `browser` and `contextBrowser` objects.

## Documentation
- Include clear usage examples and expected inputs.
- Reference provided templates/examples in each skill.
- Keep comments concise and in English.

## Validation
- Verify generated files are in expected folders.
- Ensure JSON examples are valid and consistent with k6 syntax.
- Confirm run examples use repository execution policy.

## Prompting Consistency
- Use `.github/skills/PROMPTING-GUIDE.md` templates for predictable skill activation.
