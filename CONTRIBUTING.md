## 1. How to Contribute

You can contribute by:

- proposing ideas (Feature / Enhancement issue)
- reporting bugs
- improving documentation
- proposing a new module
- submitting pull requests
- helping test existing modules

Before contributing:

1. Read the **Code of Conduct**
2. Read the **Security Policy**
3. Understand the architecture (Meta-Kernel / Rings / Modules)

---

## 2. Architectural Principles

LexOrbital consists of three layers:

### **A. Meta-Kernel — Must not be modified without prior discussion**

Represents:

- global conventions,
- front/back contracts,
- compliance rules,
- security defaults,
- secret/env management.

🛑 Any change requires an **Architecture / Module Proposal** issue.

### **B. Rings (Front / Back)**

Contain:

- APIs,
- integration contracts,
- module docking protocols.

Minor adjustments allowed via standard PR.

### **C. Modules**

Modules must:

- use the official module template,
- be autonomous (docker, tests, doc),
- expose a manifest,
- avoid inter-module dependencies.

A proposal issue is required prior to development.

---

## 3. Git Conventions

### Commit messages — Conventional Commits

Examples:

- feat(audit): add anonymization TTL
- fix(core): prevent crash when config is missing
- docs(back-ring): update OpenAPI contract

### Branch naming

- feature/<short-name>
- fix/<short-name>
- docs/<topic>
- refactor/<topic>
- module/<name>

## 4. Contributing Examples

This project (`lexorbital-lab-wouter`) is a **demonstration repository** showcasing Wouter routing patterns.

You can contribute by:

1. Adding new routing examples
2. Improving existing examples
3. Enhancing documentation
4. Fixing bugs in examples
5. Improving code clarity and comments

🛑 This is **not** a module for `lexorbital-core`.  
It is a standalone learning resource for the community.

---

## 5. Pull Request Process

PRs must:

- follow project conventions,
- include a clear description,
- include tests if applicable,
- update documentation if needed,
- pass CI.

Maintainers may request:

- revisions,
- refactoring,
- clarification of APIs,
- diagrams for structural changes.

---

## 6. Reporting Issues

Use the GitHub templates:

- Bug report
- Feature request
- Documentation issue
- Architecture / Module proposal

Security issues must follow **SECURITY.md**  
and **must not be reported publicly**.

---

## 7. Local Development

### For lexorbital-lab-wouter:

- pnpm install
- pnpm run dev
- pnpm run build
- pnpm run preview

This is a **demonstration project** showcasing Wouter routing patterns and examples.
It is designed for learning and community reference.

---

## 8. Style Guides

### TypeScript

- strict mode recommended
- avoid unchecked `any`
- explicit types for public interfaces
- prefer pure functions over unnecessary classes

### Node.js / Backend

- minimal Express/Fastify
- structured JSON logs
- lightweight middlewares
- minimal dependencies

### React / Frontend

- function components only
- hooks for shared logic
- minimalistic, technical UI
- strict prop typing

---

# Thank you ❤️

Thank you for helping shape **LexOrbital** —
a modular, compliant, and secure orbital architecture for web systems.
