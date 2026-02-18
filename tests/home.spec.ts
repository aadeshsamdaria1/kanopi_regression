import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage; // declared once, outside describe

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page); // assigned before each test
  await homePage.goto();
});

test.describe('Home page', () => {

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle('Kanopi | Modular Full-Stack Insurance Platform');
  });

  test('has book a demo button', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Book a demo' })).toBeVisible();
  });

  test('book a demo successfully', async ({ page }) => {
    await page.getByRole('link', { name: 'Book a demo' }).click();
    await homePage.fillBookDemoForm('John', 'Doe', 'john.doe@gmail.com');
    await expect(page.locator('text=Your submission was successful.')).toBeVisible();
  });
});
