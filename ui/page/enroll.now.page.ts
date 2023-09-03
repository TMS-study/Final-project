import BasePage from "./base.page";
import { Locator, Page, test } from "@playwright/test";

export class EnrollNow extends BasePage {
    private readonly enrollNow: Locator;
    private readonly contactParent: Locator;

    constructor(page: Page) {
        super(page)
        this.enrollNow = page.getByText('Поступить сейчас');
        this.contactParent = page.getByText('Контактные данные родителя');
    }

    async clickEnrollNow() {
      const butClick = await this.enrollNow.click();
      return butClick;
    }

    async isContactParent() {
      const contactParent = await this.contactParent.isVisible();
      return contactParent;
    }
}


// Блок самостоятельного поступления