## Application Overview


It uses the following libraries / technologies - don't hesitate to refer to the docs if you need to:

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for browsers.
* [Cypress](https://www.cypress.io/) - End to End front-end testing framework.
<br><br>

This API is a service that contains one endpoint,`GET` https://app.codescreen.com/api/assessments/tweets, which returns the details of all tweets for a given user. The user name is passed in as a `query param` called `userName`.

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.


All tests in the `Tweets.cy.js` test should pass if your solution has been implemented correctly.

## Requirements
The [Tweets.cy.js](cypress/e2e/Tweets.cy.js) file should not be modified. If you would like to add your own E2E tests, you can add these in a separate file in the `cypress/e2e` folder.

You may also add your own unit test files, using the [Jest](https://jestjs.io/) framework, inside the `src` folder.

The `package.json` file should only be modified to add any third-party dependencies required for your solution. None of the existing dependencies and versions should be changed. Note that other dependencies (that are not currently in `package.json`) are not required to implement a working solution. 

## Running
1. `npm install`
1. `npm start`

Navigate to http://localhost:3000/

## Tests
`npm run cy:test` 

## Time
3 hours.
