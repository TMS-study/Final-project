import { expect, test } from "@playwright/test";
import { EnrollNow } from "../page/enroll.now.page";
import { LoginPage } from "../page/login.page";
import BasePage from "../page/base.page";



test.describe('Check enroll now with and without login', () => {
    let newUser: any;
    let open: any;
    let studyNow: any;

    test.beforeEach(async ({ page }) => {
        open = new BasePage(page);
        await open.openPage();
        newUser = new LoginPage(page);
        studyNow = new EnrollNow(page);
    });

    test('Check login user', async ({ page }) => {
        await newUser.clickEnter();
        await newUser.goLogin();
        await newUser.clickButtonFuther();
        await page.reload();
        await page.waitForURL('/dashboard/daily-plan');
        expect(page.url()).toContain('/dashboard/daily-plan');
    })

    test('check enroll', async ({ page }) => {
        await newUser.goLogin();
        await studyNow.clickEnrollNow();

        const isUserLoggedIn = await newUser.isLoggedIn();

        if (isUserLoggedIn) {
            expect(await studyNow.isContactParent()).toBeTruthy();
        } else {
            expect(page.url()).toContain('/user/login');
        }

    })
})
