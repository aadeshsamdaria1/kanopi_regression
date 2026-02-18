# Playwright Automation Suite (TypeScript)

This is a **Playwright automation suite in TypeScript** with the following test cases:

1. Navigate to the home page successfully
2. Verify the presence of the **“Book a demo”** button
3. Complete the **Book a demo** flow successfully

---

## Prerequisites

- **Node.js**: v24.9.0
- **npm**: 11.6.0

---

## Installation

Install Playwright and its dependencies:

```bash
npm init playwright@latest
```

Run all test cases in Chromium with the browser visible:
```bash
npx playwright test --project=chromium --headed
```

After running tests, open the HTML report with:
```bash
npx playwright show-report
```

Sample Report
<img width="1405" height="501" alt="image" src="https://github.com/user-attachments/assets/56a4052e-f4da-4f0a-8d08-06fc24dc2b2f" />

