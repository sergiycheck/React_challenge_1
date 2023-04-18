## Application Overview


It uses the following libraries / technologies - don't hesitate to refer to the docs if you need to:

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for browsers.
* [Cypress](https://www.cypress.io/) - End to End front-end testing framework.
<br><br>

## Your Task

The application landing page contains a Form consisting of an input text box and a submit button:
<br><br>

![App Homepage](/public/app_homepage.png)
<br><br>
Once you enter a user name into the input box and submit the form, various statistics about the tweets posted by that user should be displayed:

<br>

![App Stats Display](/public/app_stats_display.png)
<br><br>

The full tweets data set, for a given user name, is retrieved from the CodeScreen Tweets API. <br><br>
This API is a service that contains one endpoint,`GET` https://app.codescreen.com/api/assessments/tweets, which returns the details of all tweets for a given user. The user name is passed in as a `query param` called `userName`.

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.

When you send an `HTTP GET` request to the endpoint above, the response will be a `200 OK`, which includes a body containing a list of tweet data in `JSON` format. 
<br><br> 

An example response is the following:

    [
        {
            "id": "0b88c8e3-5ade-48a3-a5a0-8ce356c02d2a",
            "createdAt": "2018-02-03T10:15:30",
            "text": "Chrome or Firefox? #Browsers",
            "user": {
                "id": "75343078-b5dd-306f-a3f9-8203a3915144",
                "userName": "joe_smith"
            }
        },
        {
            "id": "ac6b6139-d204-4171-982e-3cfc9f528e0d",
            "createdAt": "2018-02-03T10:25:36",
            "text": "Bought a real Christmas tree, smells a lot more christmassy! #Xmas",
            "user": {
                "id": "75343078-b5dd-306f-a3f9-8203a3915144",
                "userName": "joe_smith"
            }
        }
    ]

The `id` field represents the unique id for the tweet. The `createdAt` field contains the time at which the tweet was published, in ISO-8601 extended offset date-time format. You can assume all date-times are in the same timezone. </br>
The `user` field contains a JSON object which is made up of the unique id and name of the user who published the tweet.

<br>

**Note** that if no tweets are found for the given user, the following should be displayed:

<br>

![App Stats Display](/public/app_stats_display_no_user.png)
<br><br>

**Important** ⚠️

For each element you create for the director name text input, submit button and the stats, the element must contain the matching ID from the table below: 

| Element | ID |
| --- | ----------- |
| Input box | `input-box`
| Input form | `input-form`
| Most popular hashtag | `most-popular-hashtag` |
| Most Tweets in one day | `most-tweets` |
| Longest Tweet ID | `longest-tweet-id` |
| Most days between Tweets | `most-days` |

<br>

These are required in order for the [Tweets.cy.js](cypress/e2e/Tweets.cy.js) Cypress tests to select the correct elements.

All tests in the `Tweets.cy.js` test should pass if your solution has been implemented correctly.

## Requirements
The [Tweets.cy.js](cypress/e2e/Tweets.cy.js) file should not be modified. If you would like to add your own E2E tests, you can add these in a separate file in the `cypress/e2e` folder.

You may also add your own unit test files, using the [Jest](https://jestjs.io/) framework, inside the `src` folder.

All required styling is already in place, so there is no need to add or modify any of the existing `CSS` files.

The `package.json` file should only be modified to add any third-party dependencies required for your solution. None of the existing dependencies and versions should be changed. Note that other dependencies (that are not currently in `package.json`) are not required to implement a working solution. 

## Running
1. `npm install`
1. `npm start`

Navigate to http://localhost:3000/

## Tests
`npm run cy:test` 

## Time
3 hours.
