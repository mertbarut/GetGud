# GetGud: A GitHub Repository Viewer built with [React.js](https://reactjs.org) and TypeScript

### Summary

[GetGud](https://getgud-42.herokuapp.com/) is a generic GitHub Repository Viewer I created to showcase my repositories using GitHub's publicly available API. It is written in TypeScript with React as the frontend framework, and it uses Redux for state management. Displayed repositories are fetched with [GraphQL](https://graphql.org/) and [GitHub's API v4](https://docs.github.com/en/graphql). [TailwindCSS](https://tailwindcss.com/) is used for the generating the CSS elements and making the components responsive to screen width. [Jest](https://jestjs.io/) is used for the unit tests.

### Getting Started

GetGud's last version is [hosted on Heroku](https://getgud-42.herokuapp.com/). You may also run it locally by following the instructions below:

Clone the repository on your local machine and cd into it:

```
git clone git@github.com:mertbarut/space-mission.git
cd space-mission
```

Install the dependencies:

```
npm install
```

Create a .env file with the authentication token obtained from GitHub:

```
touch .env && cat "REACT_APP_TOKEN=your_token_here"
```

Run GetGud from the root directory:

```
npm start
```

You may launch the tests with the following command:

```
npm test
```

### Dependencies

Production:
| Package | Version |
| :--- | :---: |
| @apollo/client | ^3.6.6 |
| @reduxjs/toolkit | ^1.8.1 |
| @testing-library/jest-dom | ^5.16.4 |
| @testing-library/react | ^13.2.0 |
| @testing-library/user-event|  ^13.5.0 |
| @types/jest | ^27.5.1 |
| @types/node | ^16.11.36 |
| @types/react | ^18.0.9 |
| @types/react-dom | ^18.0.4 |
| @types/react-redux | ^7.1.24 |
| @types/react-router-dom | ^5.3.3 |
| react | ^18.1.0 |
| react-dom | ^18.1.0 |
| react-redux | ^8.0.1 |
| react-router-dom | ^6.3.0 |
| react-scripts | 5.0.1 |
| redux | ^4.2.0 |
| redux-thunk | ^2.4.1 |
| typescript | ^4.6.4 |

Development:
| Package | Version |
| :--- | :---: |
| autoprefixer | ^10.4.7 |
| postcss | ^8.4.14 |
| tailwindcss | ^3.0.24 |

### Features

**1. Filterable Repositories**

Repositories can be filtered by their name and the 4 most used programming languages used in them.

**2. Pagination**

Repositories are displayed as 4 repositories per page by default, and this can be changed by using another number as a parameter in the App component. User can change pages using two buttons, which is implemented using a redux state without the need to prop drill.

**3. Sidebar with User Information**

Sidebar contains the name, login, profile picture, follower and following number, and a link to the user's profile on GitHub.

### Known Issues

None

### Coming Soon

- [ ] More Unit and E2E tests!
- [ ] Functional input field for being able to display user's repositories
- [ ] Display more than 100 repositories

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
