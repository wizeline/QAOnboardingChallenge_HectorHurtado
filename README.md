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

Now, if you want to perform a cross platform/browser testing, you can use BrowserStack

<code>npm install testcafe-browser-provider-browserstack</code>

<code>npm run test-all-browserstack</code>

Also you can specify in which platform and browser you want to perform your tests.

<code>testcafe 'browserstack:{{NAME_OF_THE_BROWSER}}@{{VERSION_OF_THE_BROWSER}}:{{PLATFORM}}' ./tests</code>

To make a full analysis of the code, you can run SonarQube

<code>npm install sonar-scanner</code>

<code>npm run sonarqube</code>

Take a look of the results in this link: http://localhost:9000/dashboard?id=QAOnboardingChallenge

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
