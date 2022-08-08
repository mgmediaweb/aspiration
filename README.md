# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. There should also be Search capability to search/query on any term or topic.¬†You should implement best practices with the UI.

To interact with the Github GraphQL API you'll need to have 
* a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) 
git.
* You'll want to make use of the key in the .env file within your application.

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability 
* Unit tests will be greatly appreciated 
* Design will be ignored, however usability and accessibility will be taken into consideration 
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit 
* We hope that you can complete the assignment within 2 hours but don't set any time constraints 
* Please reach out per email or by opening an issue if anything is unclear or blocking you 

Best of luck

### Dev Notes

In this exercise, the **@Apollo** library was used to connect to the **GraphQL** environment, in addition to the **UUIDv4** library to generate unique ids for the iteration of displaying the elements on the screen.

### View Live Demo
https://mg-aspiration.herokuapp.com/

### How to run app & test

To view this document on your local computer:
* Clone this repository.
* Install dependencies (npm install).
* Create a .env.local file with you personal GitHub Access Token (REACT_APP_TOKEN = YOUR_TOKEN).
* Run React environment (npm start).

To testing:
* run **npm test** and check test result.

### Future Improvements
Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring: 
    If this web app continues to grow, it is recommended to use a suitable file structure for better organization and easy maintenance.

* Refactoring: 
    This practical example is refactored in its maximum expression, however, if this webapp will grow with new functions, it is possible that it will require a refactoring

* Additional Features:
    An infinite number of options can be implemented, such as ordering by name or number of stars. Drop-down menus to show the description of each Repository. Indicate statistics of amount of Forks, among many other examples.
