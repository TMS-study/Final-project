import { expect, test } from "@playwright/test";
import { EnrollNow } from "../page/enroll.now.page";
import { LoginPage } from "../page/login.page";



test.describe('Check enroll now with and without login', () => {
    let newUser;
    test('Check login user', async ({ page }) => {
        newUser = new LoginPage(page);
        await newUser.clickEnter();
        await newUser.goLogin();
        await newUser.clickButtonFuther();
        await page.reload();
        await page.waitForURL('/dashboard/daily-plan');
        expect(page.url()).toContain('/dashboard/daily-plan');
    })

    test('check enroll', async ({ page }) => {
        newUser = new LoginPage(page);
        await newUser.goLogin();
        const studyNow = new EnrollNow(page);
        await studyNow.clickEnrollNow();

        const isUserLoggedIn = await newUser.isLoggedIn();

        if (isUserLoggedIn) {
            expect(await studyNow.isContactParent()).toBeTruthy();
        } else {
            expect(page.url()).toContain('/user/login');
        }

    })
})
