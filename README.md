# GitHub Search

React/GraphQL application that allow to search GitHub for users and repositories.

## Table of contents
1. [Technologies and libraries](#technologies-and-libraries)
2. [Overview](#overview)
    1. [About](#about)
    2. [State](#state)
    3. [Providers](#providers)
    4. [Facades](#facades)
    5. [Stream managment](#stream-managment-important)
    6. [GraphQL and queries](#graphql-and-queries)
    7. [Development](#development)
    8. [Styling](#styling)
    9. [Debouncing](#debouncing)
3. [Installation](#installation)
4. [Roadmap](#roadmap)
5. [License](#license)

## Technologies and libraries
- [React](https://pl.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [GitHub GraphQL Api](https://docs.github.com/en/graphql)
- [Apollo](https://www.apollographql.com/docs/react/) - state management library to manage and cache data with GraphQL
- [Graphql Code Generator](https://github.com/dotansimha/graphql-code-generator) - tool that generates code out of GrapQL schema.
- [Context API](https://en.reactjs.org/docs/context.html) - tool that allow to pass data through the component tree without having to pass props down manually at every level
- [Awesome Debounce Promise](https://www.npmjs.com/package/awesome-debounce-promise) - for debouncing a search input
- [RxJS](https://rxjs.dev/) - reactive extension library for JavaScrpt.
- [Material UI](https://mui.com/material-ui/getting-started/overview/) - library that implements Google's Material Design and includes colection of prebuild component, that are ready to use
- [Moment](https://momentjs.com/) - library to formatting dates


## Overview

### About architecture
The main view contains a list that shows a maximum of 10 results per users and repositories and a counter showing the sum of all available results based on the given query.

The application is founded on a **reactive model of state management through streams** and using the React Context API.

The image below shows a simplified diagram of the architecture:

![Aplication architecture](/src/images/architecture.jpg)

The main goal was to create such an architecture that would **separate the components (views) and logic** of the application as much as possible, and at the same time, would be **easy to develop and maintain**. However, the main determinant was **reactivity**, and therefore views are responsive to data changes.
**Loose coupling** is also important for easy development and implementation of changes.

**Components receive data from streams** and then emit events (e.g. searchChange), based on which **controllers make changes to streams** or ask repositories for new data, which are then transferred back to the stream to power the components. 

### State
The state is represented in the picture with colored rectangles. I use the Context API to manage it. **Depending on the application layer, components have access to different state layers**. The most global is the SearchAppState state:

```ts
export interface SearchAppStateInterface {
    searchInput$: BehaviorSubject<string>;
}
```

Then there's SearchListsState, which aggregate the state for (many) lists and stores the result count data:

```ts
export interface SearchListsStateInterface {
    resultsTotalCount$: BehaviorSubject<number>;
    listCounter$: BehaviorSubject<ListCounters>; // Stream for single list counter
    listsCounters$: BehaviorSubject<ListCounters>; // Stream for multiple lists counters from all subject info
}
```

Next, the SearchListState, created dynamically for individual lists, stores the data needed to generate a single list of entities (such a state is created separately for each list, which we will provide in config):

```ts
export interface SearchListStateInterface<T> {
    entities$: BehaviorSubject<T[]>;
    queryVariables$: BehaviorSubject<SearchQueryVariables>;
}
```

### Providers
**Providers deliver state to the application architecture layers**. For my needs, I create three providers: SearchListsProvider (containing SearchAppState), SearchListsProvider (containing SearchListsState) and SearchListProvider (with searchListState).
The app also uses the providers provided by the two libraries.
The first one is ApolloProvider, which provide the client that allows you to communicate with an external API (GitHub Api) using GraphQL. Client also deliver cache functionality, so if the data is already in Apollo state, then there's no need for additional queries. **All queries go through the Apollo Client layer**.
The second of the external providers is ThemeProvider, thanks to which we can create a consistent theme of the application and use it in all child components.

### Facades
**I used facade pattern to interact with components and mask the undelaying interactions**. It helps me keep code more readable. At the same time, it is the facades that are responsible for creating a state that is then transferred to providers and for reacting to changes in the state (also in the state of the upper layers of the application).
Since facades are usually used in a class concept, I used React Hooks to design them. Thus, three facades were created: useSearchApp, useSearchLists, useSearchList. 
**Facades communicate with the controllers**.

**UseObservable is a very important Hook**. ith its help, components subscribe to steams that provide them with data. When a component is pinned by useObservable to stream, each time there is a data change, the component will react to it.

### Stream managment (important)
**Streams are managed by controllers**. Also, they are provided in state by providers. Components receive data from them and react to changes.
**Streams are not global! They are created dynamically for the needs of a specific application layer, so that you can create, for example, many lists, each with its own data stream. For this reason, we need to pass the stream from the state (from the provider) to the controllers so that the controller can manage the appropriate stream.**

### GraphQL and queries
All queries pass through an Apollo client. This allows us to **limit the number of queries** when data already exists in the Apollo cache.
Thanks to GraphQL, we can adjust the shape of the query and limit the amount of data that the database returns by restricting the properties we ask for to those we need. There are two queries defined.

Users query:
```graphql
query usersSearch($query: String!, $type: SearchType!, $numOfResults: Int!, $nextPageCursor: String) {
    search(type: $type, query: $query, first: $numOfResults, after: $nextPageCursor) {
        pageInfo {
            hasNextPage
            endCursor
        }
        totalCount: userCount
        nodes {
            ... on User {
                avatarUrl
                name
                login
                location
                bio
                url
                followers {
                    totalCount
                }
                following {
                    totalCount
                }
                starredRepositories {
                    totalCount
                }
                id
            }
        }
    }
}
```

Repositories query:
```graphql
query repositoriesSearch($query: String!, $type: SearchType!, $numOfResults: Int!, $nextPageCursor: String) {
    search(type: $type, query: $query, first: $numOfResults, after: $nextPageCursor) {
        pageInfo {
            hasNextPage
            endCursor
        }
        totalCount: repositoryCount
        nodes {
            ... on Repository {
                name
                nameWithOwner
                description
                watchers {
                    totalCount
                }
                stargazers {
                    totalCount
                }
                id
                issues {
                    totalCount
                }
                languages(first: 1) {
                    nodes {
                        name
                        color
                    }
                }
                licenseInfo {
                    name
                }
                url
                updatedAt
            }
        }
    }
}

```

### Development
To add another list to the list view, all you need to do is give its `config` (single item component, repository and entity type name) to the SearchLists component, and the whole thing should be generated based on the existing architecture. The only thing you **need to remember** is that the single item component must have `prop` named `entity` in order to receive the data correctly.

### Styling
For styling views and elements I used `styled()`, which is the Styled Components method provided by MaterialUI. I follow the rules of **Mobile First**, so all the styles added are for the mobile version, and then any differences are extended by breakpoints for the larger versions.

### Debouncing
Since the application is based on dynamic input with events calling queries for every value change, we face the problem of a suboptimal number of queries. Additionally, there are times when the old query is delivered later than the new one, which makes the information in the views outdated. To prevent such problems, I used **debouncing**, thanks to which the **code triggers events only after the user stops typing text and the appropriate (given) time has passed**.

## Installation
1. Clone this repository
1. You have to generate a [personal access token](https://github.com/settings/tokens) on GitHub. [Here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) you can find guide how you can do this (no special scopes needed).
3. In root folder, you have to copy .env.example to .env file. In root directory open terminal and type: 
```
cp .env.example .env
```
4. You need to open the newly created .env file and replace the value of your_access_token with the generated token value from point 2.
5. Run `npm install`.
6. After calling `npm run start`, the application should start in the browser under `localost: 3000`
7. If you want to make changes to the queries, you then have to call `npm run codegen`, which will generate the GrapQL schema files.

## License
[MIT](https://choosealicense.com/licenses/mit/)