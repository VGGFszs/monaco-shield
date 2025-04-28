# Test info

- Name: homepage has MonacoShield in title and shows welcome
- Location: /Users/vincentfabie/Downloads/monaco-shield/tests/e2e/sample.e2e.spec.ts:3:5

# Error details

```
Error: page.goto: NS_ERROR_CONNECTION_REFUSED
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

    at /Users/vincentfabie/Downloads/monaco-shield/tests/e2e/sample.e2e.spec.ts:4:14
```

# Page snapshot

```yaml
- heading "Unable to connect" [level=1]
- paragraph: Firefox can’t establish a connection to the server at localhost:3000.
- paragraph
- list:
  - listitem: The site could be temporarily unavailable or too busy. Try again in a few moments.
  - listitem: If you are unable to load any pages, check your computer’s network connection.
  - listitem: If your computer or network is protected by a firewall or proxy, make sure that Nightly is permitted to access the web.
- button "Try Again"
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 |
  3 | test('homepage has MonacoShield in title and shows welcome', async ({ page }) => {
> 4 |   await page.goto('/');
    |              ^ Error: page.goto: NS_ERROR_CONNECTION_REFUSED
  5 |   await expect(page).toHaveTitle(/MonacoShield/i);
  6 |   await expect(page.locator('body')).toContainText(['MonacoShield', 'Bienvenue', 'Welcome']);
  7 | }); 
```