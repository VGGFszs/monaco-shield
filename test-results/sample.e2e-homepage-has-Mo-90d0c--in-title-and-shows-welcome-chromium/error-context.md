# Test info

- Name: homepage has MonacoShield in title and shows welcome
- Location: /Users/vincentfabie/Downloads/monaco-shield/tests/e2e/sample.e2e.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

    at /Users/vincentfabie/Downloads/monaco-shield/tests/e2e/sample.e2e.spec.ts:4:14
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 |
  3 | test('homepage has MonacoShield in title and shows welcome', async ({ page }) => {
> 4 |   await page.goto('/');
    |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  5 |   await expect(page).toHaveTitle(/MonacoShield/i);
  6 |   await expect(page.locator('body')).toContainText(['MonacoShield', 'Bienvenue', 'Welcome']);
  7 | }); 
```