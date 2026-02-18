import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly bookDemoLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookDemoLink = page.getByRole('link', { name: 'Book a demo' });
  }

  async goto() {
    await this.page.goto('https://kanopicover.com/');
  }

  async fillBookDemoForm(firstName: string, surname: string, email: string) {
    await this.page.fill('#form-field-first_name', firstName);
    await this.page.fill('#form-field-Surname', surname);
    await this.page.fill('#form-field-email', email);
    await this.page.getByRole('button', { name: 'Book a demo' }).click();
  }
}
