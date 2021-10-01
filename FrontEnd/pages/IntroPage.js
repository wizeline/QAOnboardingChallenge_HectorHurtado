import { Selector, t } from 'testcafe'

class IntroPage {
	constructor() {
		this.loginButton = Selector('a[href="/users/showlogin"]')
	}

	async clickLogin() {
		await t.click(this.loginButton)
	}
}

export default new IntroPage()