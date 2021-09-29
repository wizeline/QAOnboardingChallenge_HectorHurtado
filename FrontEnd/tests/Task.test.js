import IntroPage from '../pages/IntroPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import { CREDENTIALS, TASK_NAMES } from '../data/Constants'

fixture('Task Feature Testing')
    .page('https://todoist.com/')

    test('Create a task', async t => {
        const taskName = 'Test' // Revisar cuando se escribe más de una palabra o palabras largas
        await IntroPage.clickLogin()
        await LoginPage.submitLoginForm(CREDENTIALS.USERNAME, CREDENTIALS.PASSWORD)
        let finalTaskName = await MainPage.createSingleTask(taskName)
        await t.expect(await MainPage.taskExists(finalTaskName)).ok()
    })

    test('Create 10 tasks', async t => {
        await IntroPage.clickLogin()
        await LoginPage.submitLoginForm(CREDENTIALS.USERNAME, CREDENTIALS.PASSWORD)
        let numberOfTasks = 5
        let taskNames = await MainPage.createTasks(TASK_NAMES, numberOfTasks)
        let i = 0
        for(i = 0; i < numberOfTasks; i++) {
            await t.expect(await MainPage.taskExists(taskNames[i])).ok()
        }
    })