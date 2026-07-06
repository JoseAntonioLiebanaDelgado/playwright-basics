# 🧪 Playwright Automation

Personal repository where I learn and practice **QA Automation** using **Playwright** and **TypeScript**.

This project documents my transition from **Manual QA** to **QA Automation**, building real examples step by step while learning new concepts and best practices.

---

# 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions (CI)

---

# 📂 Repository Structure

```
tests/
│
├── learning/
│   ├── example.spec.ts
│   ├── google-search-basic.spec.ts
│   ├── google-title.spec.ts
│   ├── google.spec.ts
│   └── volotea-home.spec.ts
│
└── practice/
```

- **learning/** → Exercises and examples created while learning Playwright.
- **practice/** → Future exercises, challenges and more complete automation scenarios.

---

# ✅ Topics Covered

- UI Automation
- Playwright fundamentals
- Locators
- Assertions
- Navigation
- Keyboard interactions
- Git & GitHub
- GitHub Actions (CI)

---

# 🚧 Coming Soon

- API Testing
- Page Object Model (POM)
- Fixtures
- Test Data Management
- Environment Variables
- End-to-End Scenarios
- Parallel Execution
- Cross-browser Testing

---

# ▶️ Run the project

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test tests/learning/google-search-basic.spec.ts
```

Open the HTML report:

```bash
npx playwright show-report
```

---

# ⚙️ Continuous Integration

This repository includes a **GitHub Actions** workflow that automatically executes all Playwright tests after every push to the `main` branch.

The workflow:

- Creates a clean Ubuntu virtual machine
- Installs Node.js
- Installs project dependencies
- Installs Playwright browsers
- Runs all automated tests
- Reports the execution result

---

# 🎯 Goal

Build a solid QA Automation portfolio while learning Playwright and modern testing practices through small, incremental projects.

---

Created by **Jose Antonio Liébana**
