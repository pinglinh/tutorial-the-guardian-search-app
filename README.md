# tutorial-the-guardian-search-app

This repo is part of my tutorial I've written up on [how to test React components using Jest and Enzyme](#). There are 3 branches in this repo:

1.  **functional-app** - contains all the components without any tests
1.  **unit-testing** - unit testing is included for Search and SearchResults components
1.  **integration-testing** - integration testing included for SearchContainer component

## Functional App Branch

1.  Run `npm install`
1.  Create `config.js` file and include the following:

    ```
    export const API_KEY = "YOUR_API_KEY";
    ```

    You need to obtain the API key from the [Guardian website](http://open-platform.theguardian.com/access/) by signing up. Copy and paste your key where it says **YOUR_API_KEY**.

1.  Run `npm start` to start the server
