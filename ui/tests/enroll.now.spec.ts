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


    // test('check enroll if user logged in', async ({page}) => {
    //     await newUser.clickEnter();
    //     await newUser.goLogin();
    //     expect(page.url()).toContain('/dashboard/daily-plan');

    //     await newUser.openPage();
    //     await studyNow.clickEnrollNow();
    //     expect(await studyNow.isContactParent()).toBeTruthy();
    // })

    test('check enroll if user not logged in', async ({ page }) => {
        await newUser.openPage();
        await studyNow.clickEnrollNow();
        expect(page.url()).toContain('/user/login');
    })
})
