import IntroPage from '../pages/IntroPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import { CREDENTIALS } from '../data/Constants'
//import { LOGIN_ERROR_MESSAGES } from '../data/Constants'

fixture('Login Feature Testing')
	.page('https://todoist.com/')

test.skip('Login with a valid user: ', async t => {
	await IntroPage.clickLogin()
	await LoginPage.submitLoginForm(CREDENTIALS.USERNAME, CREDENTIALS.PASSWORD)
	await t.expect(MainPage.todayView.exists).ok()
})

test('Login with an invalid user: ', async t => {
	await IntroPage.clickLogin()
	await LoginPage.submitLoginForm('user', CREDENTIALS.PASSWORD)
	await t.expect(LoginPage.invalidLoginLabel.innerText).eql('Invalid email address.')
})

test('Login with a non registered email: ', async t => {
	await IntroPage.clickLogin()
	await LoginPage.submitLoginForm('user@gmail.com', CREDENTIALS.PASSWORD)
	await t.expect(LoginPage.invalidLoginLabel.innerText).eql('Wrong email or password.')
})

test('Login with an invalid password: ', async t => {
	await IntroPage.clickLogin()
	await LoginPage.submitLoginForm(CREDENTIALS.USERNAME, 'password')
	await t.expect(LoginPage.invalidLoginLabel.innerText).eql('Wrong email or password.')
})

test('Login with no email: ', async t => {
	await IntroPage.clickLogin()
	await LoginPage.submitLoginForm('', CREDENTIALS.PASSWORD)
	await t.expect(LoginPage.invalidLoginLabel.innerText).eql('Invalid email address.')
})

test('Login with no password: ', async t => {
	await IntroPage.clickLogin()
	await LoginPage.submitLoginForm(CREDENTIALS.USERNAME, '')
	await t.expect(LoginPage.invalidLoginLabel.innerText).eql('Blank password.')
})