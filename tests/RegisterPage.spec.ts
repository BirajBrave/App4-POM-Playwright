import{test, expect} from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test("User Register Sucessifully", async({page})=>{

    const registerPage = new RegisterPage(page);

    await page.goto("https://qaplayground.com/");
    //await page.waitForLoadState("networkidle");

    await registerPage.clickLoginSignup();
    await expect(page).toHaveURL("https://qaplayground.com/auth/sign-in");

    await expect(registerPage.loginPageTitle).toHaveText("Welcome back");

    await registerPage.clickSignup();
    await expect(page).toHaveURL("https://qaplayground.com/auth/sign-up");

    await expect(registerPage.signupPageTitle).toHaveText("Create your account");

    await registerPage.fillRegistrationForm("Mona Rout", "bravebiraj@yahoo.com", "mona1234");

    await registerPage.clickCreateAccount();
    await expect(page).toHaveURL("https://qaplayground.com/auth/sign-up");

    await expect(registerPage.accountPageTitle).toHaveText("Check your email");
    





});