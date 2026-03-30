---
name: docker
description: >
  Use this skill whenever the user works with Docker or Docker Compose: writing Dockerfiles,
  configuring docker-compose.yml, setting up containers, managing users and permissions,
  defining services, or any mention of "Docker", "container", "Dockerfile",
  "docker-compose", or "image build". Also triggers when reviewing or auditing
  container security configurations.
---

# Docker & Docker Compose

## Security
- **Never run containers as root**
- Specify a non-root user in the Dockerfile:
  ```dockerfile
  RUN useradd -m automator
  USER automator
  ```
- Ensure the non-root user has the necessary permissions for required files/directories
- Avoid using `sudo` inside containers; instead, set appropriate permissions on files and directories
- Avoid injecting sensitive credentials directly into Dockerfiles; use environment variables or secrets management solutions at runtime instead

## File Organization
- All Docker-related files go in the `infrastructure/` directory:
  ```
  infrastructure/
  ├── Dockerfile
  └── docker-compose.yml
  ```
- Do not place Dockerfiles or compose files at the project root or mixed with source code

## Image size
- Avoid unnecessary layers and large base images to keep the final image size minimal
- Avoid installing unnecessary packages or files in the image; use multi-stage builds if needed to keep the final image clean

## References & Examples
When creating new Dockerfiles or docker-compose schemas, use these examples as your baseline for security (non-root `automator` user) and structure:
- Example Dockerfile: `examples/example-Dockerfile`
- Example Docker Compose: `examples/example-docker-compose.yml`

## Quality Checklist
- Apply `../QUALITY-CHECKLIST.md` before finalizing generated outputs.