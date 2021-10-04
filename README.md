# QA Onboarding Challenge

1. Clone the repository.

# Front End - TestCafe
1. Go to the FrontEnd folder
2. Install the dependencies

<code>npm init</code>

<code>npm install node</code>

<code>npm install testcafe</code>

<code>npm install dotenv</code>

<code>npm install testcafe-reporter-html</code>

<code>npm install eslint --save-dev</code>

3. Execute the tests (in Google Chrome)

<code>npm run test-all-chrome</code>

If you want to run the tests in another browser, type:

<code>testcafe {{NAME_OF_THE_BROWSER}} ./tests</code>

And if you want a report of the tests, execute this:

<code>testcafe {{NAME_OF_THE_BROWSER}} ./tests --reporter html:output/report.html</code>

# Back End - Newman

1. Go to the BackEnd folder
2. Install the dependencies

<code>npm init</code>

<code>npm install node</code>

<code>npm install newman</code>

<code>npm install newman-reporter-htmlextra</code>

3. Execute all the tests

<code>npm run test</code>

If you want to run the tests without a report, you can simply run:

<code>npx newman run ./collection/Todoist.postman_collection.json -e ./envVariables/Todoist.postman_environment.json</code>
