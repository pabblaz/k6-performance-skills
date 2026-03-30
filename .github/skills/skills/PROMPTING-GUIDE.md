# Prompting Guide for Skills Activation

Use these templates to improve skill matching and reduce ambiguous responses.

## Quick Rules
- State the target skill intent explicitly in the first line.
- Include module path and expected output format.
- Include repository constraints (scenarios in JSON, run through run-k6.sh, no hardcoded secrets).
- Ask for files to be created or updated with exact paths.

## Prompt Templates

### 1) k6 Config Generator
Use when you want scenario JSON profiles.

```text
Use k6-config-generator.
Create a <load|stress|spike|soak|benchmark> scenario JSON in <module>/scenarios/<name>.json.
Apply thresholds: http_req_duration p(95)<1000 and http_req_failed rate<0.1.
Then provide the run command using ./global/scripts/run-k6.sh.
```

### 2) k6 Auth Generators
Use when you need reusable auth helpers.

```text
Use k6-auth-generators.
Generate <JWT|HMAC|API key> helpers in global/utils/auth/.
No hardcoded secrets. Use __ENV variables only.
Also provide a short usage snippet for a test in <module>/tests/.
```

### 3) k6 Boilerplate Generator
Use when creating a new test module scaffold.

```text
Use k6-boilerplate-generator.
Generate a lightweight <api|frontend> scaffold in <module>/.
Include tests/, scenarios/, and README.md.
Keep scenarios in JSON and provide run commands with ./global/scripts/run-k6.sh.
```

### 4) k6 Performance Tests
Use when implementing or refactoring tests.

```text
Use k6-performance-tests.
Implement/update <test-name> in <module>/tests/.
Do not hardcode executor/stages/vus/duration in options.
If needed, create/update <module>/scenarios/<profile>.json.
```

### 5) k6 HTML Report
Use when adding summary output.

```text
Use k6-html-report.
Add handleSummary to <module>/tests/<file> with HTML + text output.
Keep existing test logic unchanged.
```

### 6) Docker
Use when touching container files.

```text
Use docker skill.
Create/update infrastructure/Dockerfile and/or infrastructure/docker-compose.yml.
Run containers as non-root and do not embed secrets in files.
```

## Strong Prompt Pattern
Prefer this format in team requests:

```text
Goal: <what to build>
Skill: <skill-name>
Paths: <exact files/folders>
Constraints:
- scenarios in JSON
- run via ./global/scripts/run-k6.sh
- no hardcoded secrets
Deliverables:
- list of files changed
- final run command
```

## Ambiguity Guard
If a request is broad, add this sentence:

```text
If multiple skills match, prioritize <skill-name> and follow .github/skills/QUALITY-CHECKLIST.md.
```
