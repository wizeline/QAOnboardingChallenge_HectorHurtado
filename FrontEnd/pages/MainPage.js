import { Selector, t } from 'testcafe'

class MainPage {
	constructor() {
		this.todayView = Selector('.today_view')
		this.addTaskLink = Selector('.plus_add_button')
		this.taskNameField = Selector('.public-DraftStyleDefault-block')
		this.addTaskButton = Selector('.reactist_button--primary')
	}

	async createSingleTask(taskName) {
		await t.wait(3000)
		if(await this.addTaskLink.exists)
			await t.click(this.addTaskLink)
		let randomNumber = Math.random().toString().substring(2)
		taskName = taskName + randomNumber
		await t.typeText(this.taskNameField, taskName)
		await t.click(this.addTaskButton)
		return taskName
	}

	async createTasks(taskNames, numberOfTasks) {
		let i = 0
		let taskName = taskNames[0]
		let taskNamesArray = []
		while(i < numberOfTasks) {
			if(taskName != '') {
				taskNamesArray[i] = await this.createSingleTask(taskName)
			}
			i++
		}
		return taskNamesArray
	}

	async taskExists(taskName) {
		const tasks = Selector('.task_content')
		let i = 0
		try {
			while(typeof(await tasks.nth(i).innerText) == 'string') {
				if(await tasks.nth(i).innerText === taskName) {
					return true
				}
				i = i + 1
			}
		}
		catch {
			return false
		}
	}
}

export default new MainPage()