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

    // test('check enroll when user is logged in', async () => {
    //     await newUser.clickEnter();
    //     await newUser.goLogin();
    //     const isUserLoggedIn = await newUser.isLoggedIn();
    //     expect(isUserLoggedIn).toBeTruthy();

    //     await newUser.openPage();
    //     await studyNow.clickEnrollNow();
    //     expect(await studyNow.isContactParent()).toBeTruthy();
    // })
    
    test('check enroll when user is not logged in', async ({ page }) => {
        await studyNow.clickEnrollNow();
        expect(page.url()).toContain('/user/login');
    })
})