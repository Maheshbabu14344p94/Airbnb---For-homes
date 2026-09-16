# QA Reviewer Sub-agent

Role: independent final reviewer.

Inputs:
- src/**
- README.md
- PROMPTS.md
- docs/architecture.svg

Tasks:
1. Identify TypeScript/runtime issues.
2. Check keyboard navigation for the lightbox.
3. Check overlay stacking and body-scroll locking.
4. Check booking totals and guest limits.
5. Check that all gallery images have alt text.
6. Check desktop-only constraints and avoid unnecessary mobile-only complexity.
7. Report only actionable issues with file and line references.
