import{ Page } from '@playwright/test';

export class RegisterPage{

    private loginSignup;
    readonly loginPageTitle;
    private signupButton;
    readonly signupPageTitle;

    private fullName;
    private email;
    private password;

    private createButton;

    readonly accountPageTitle;
    readonly accountPageDescription;

    constructor(private page: Page){
        this.loginSignup = this.page.getByRole("link", {name: "Log in / Sign up"});
        this.loginPageTitle = this.page.getByRole("heading", {name: "Welcome back"});
        this.signupButton = this.page.locator('[data-testid="sign-up-link"]');
        this.signupPageTitle = this.page.getByRole("heading", {name: "Create your account"});

        this.fullName = this.page.getByPlaceholder("Jane Smith");
        this.email = this.page.getByPlaceholder("you@example.com");
        this.password = this.page.getByPlaceholder("At least 8 characters");

        this.createButton = this.page.getByRole("button", {name: "Create account"});

        this.accountPageTitle = this.page.getByRole("heading", {name: "Check your email"});

        this.accountPageDescription = this.page.getByText("We sent a verification link to mona@gmail.com. Click it to activate your account — the link expires in 24 hours.");
    }

    // async clickLoginSignup(){
    //     await this.loginSignup.click();
    // }

    async clickLoginSignup(){
    await this.loginSignup.scrollIntoViewIfNeeded();
    await this.loginSignup.click();
}

    async clickSignup(){
        await this.signupButton.click();
    }

    async fillRegistrationForm(fullNameValue: string, emailValue: string, passwordValue: string){
        await this.fullName.fill(fullNameValue);
        await this.email.fill(emailValue);
        await this.password.fill(passwordValue);
    }

    async clickCreateAccount(){
        await this.createButton.click();
    }
}