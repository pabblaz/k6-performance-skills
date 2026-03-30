# k6-Performance-Skills

A comprehensive repository of skills and instructions for AI agents to develop k6 performance testing projects following internal standards and best practices.

## Overview

This repository provides structured skills, code organization guidelines, and copilot instructions to enable intelligent automation of k6 performance test development. It ensures consistency, reusability, and adherence to organizational standards across k6 projects.

## Repository Structure

```
k6-performance-skills/
├── .github/
│   ├── copilot-instructions.md    # Core development guidelines and standards
│   └── skills/                     # AI skill definitions for k6 development
├── README.md                        # This file
└── .gitignore                       # Git ignore rules
```

## Key Standards

### Code Organization

Projects should follow this directory structure:
- `adapters/` - External integrations and adapters
- `infrastructure/` - Infrastructure setup and configuration
- `tests/` - k6 test scripts and test definitions
- `config/` - Configuration files
- `resources/` - Test data and static resources
- `utils/` - Utility functions and helpers
- `global/` - Shared cross-product logic

### Code Style

- **Python**: snake_case for files and functions, UPPER_CASE for constants
- **JavaScript**: camelCase for files and functions
- **Comments**: English only, clear and concise
- **Functions**: Keep focused, under 20 lines

### Code Quality

- Avoid code duplication; extract shared logic into reusable modules
- Reusable cross-product logic must be placed in the `global/` directory
- Separate data, logic, and configuration - no hardcoded values
- Include `README.md` in each major product directory
- Delete temporary/debug files before finishing (e.g., `debug_*.py`, `test_temp.*`)

### Execution

- Always execute k6 test scripts using `run-k6.sh`

## Development Workflow

1. **Setup**: Create project structure following the guidelines above
2. **Development**: Write code adhering to the style and organization standards
3. **Testing**: Execute tests using the `run-k6.sh` wrapper script
4. **Cleanup**: Remove temporary and debug files before committing
5. **Documentation**: Maintain README files in major directories

## Skills

AI agents can leverage skills defined in `.github/skills/` to automate k6 project development tasks, ensuring consistency with these guidelines.

## Contributing

When developing new k6 projects or adding to this repository:
- Follow all code style guidelines
- Maintain the prescribed directory structure
- Document your code clearly
- Update this README if adding new standards or guidelines

## References

- [k6 Official Documentation](https://k6.io/docs/)
- Code guidelines: See [.github/copilot-instructions.md](.github/copilot-instructions.md)
