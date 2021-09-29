import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.usernameField = Selector('#email')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('.submit_btn')
        this.invalidLoginLabel = Selector('.error_msg')
    }

    async submitLoginForm(username, password) {
        if(username != '')
            await t.typeText(this.usernameField, username)
        if(password != '')
            await t.typeText(this.passwordField, password)
        await t.click(this.loginButton)
        await t.wait(3000)
    }
}

export default new LoginPage();