# 📝 Changelog

All notable changes to this project will be documented in this file.  
This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

---

## [Release Version] - _title/description_

### Added

-

### Changed

-

### Fixed

-

### Removed

-

### Added (Testing)

### Notes

-

- ***

---

## [2.0.0] - Major UI Design and Testing Overhaul

### Added

- Added new **Become a Tutor** page with comprehensive data and sections.
- Added new **Privacy Policy** and **Terms of Service** pages, compliant with Malaysian PDPA.
- New unit tests for all major pages: `Become a Tutor`, `FAQ`, `Pricing`, `Privacy Policy`, and `Terms of Service`.
- Robust E2E-style tests for all application routes.
- Updated **robots.ts** and **sitemap.ts** with all new routes for improved SEO visibility.
- Advanced mocking strategies for `motion/react`, `NeuralNetworkBg`, and `ImageWithFallback` to improve test reliability.
- Flexible text matchers for handling split text nodes in complex UI components.

### Changed

- **Landing Page Overhaul**: Refactored the landing page with a modern Design System, including new feature sections and improved typography.
- **FAQ Page Overhaul**: Reorganized FAQ structure with categories and searchable items.
- **Pricing Page Overhaul**: Refactored pricing cards and comparison table for better clarity and interaction.
- **Component Architecture**: Restructured the `src/components` directory to follow Next.js best practices, splitting monolithic components into modular sections.
- Refactored `Landing Page` unit tests to use `data-testid` and correct component mocks.
- Improved mocking of named exports across the entire test suite.
- Replaced specific text matchers with more robust role-based assertions in E2E tests.

### Removed

- Redundant snapshot tests to improve test maintenance and focus on functional verification.

---

## [1.0.12] - FAQ Page

### Added

- Creating FAQ Section A


## [1.0.11] - Add Pricing Page

### Added

- Add pricing page to landing page
- Add new dependency (Motion) for animation

---

## [1.0.10] - Update UI Accent Colour

### Added

- Change colours of UI element to match prototype

---

## [1.0.9] - Section C Side Padding Fix

### Added

- Add side padding to Section C

---

## [1.0.8] - Section E Landing Page

### Added

- Added design for Section E

### Changed

- Tested responsive for both desktop and mobile
- Updated unit tests

---

## [1.0.7] - Section D Landing Page

### Added

- Added design for Section D

### Changed

- Tested responsive for both desktop and mobile
- Updated unit tests

---

## [1.0.6] - Section C Landing Page

### Added

- Added design for Section C

### Changed

- Tested responsive for both desktop and mobile
- Updated unit tests

---

## [1.0.5] - Pull Request Template

### Added

- PR template

### Changed

- Automated PR process

---

## [1.0.4] - Section B Landing Page

### Added

- Added design for Section B

### Changed

- Tested responsive for both desktop and mobile
- Updated unit tests

---

## [1.0.3] - Update Section A

### Added

- Update project structure folder to follow the best practice

### Changed

- Tested responsive for both desktop and mobile
- Updated both e2e and unit tests

---

## [1.0.2] - Section A Landing Page

### Added

- Added design for Section A
- Tested responsive

---

## [1.0.1] - SEO Metadata

### Added

- Update metadata for SEO
- Implemented sitemap and robots.txt
- Updated favicon.ico

---

## [1.0.0] - Initial setup

### Added

- Initial release of **ng-homeland**
- ShadCN Ui installed
- Jest framework for both e2e and unit testing
- Plugged **commitizen** into the project

---

### Notes

- Use **semantic versioning**: `MAJOR.MINOR.PATCH` (e.g., 1.0.0 → 1.1.0 → 1.1.1)
- Bootstrapped the ng-core project
- Always add the newest version **on top** of the file.

---
