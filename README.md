# Chat API

An online chat app, letting you have realtime conversations with other users.

+ Client site: https://zzyyfff.github.io/chat-client
+ Client repo: https://github.com/zzyyfff/chat-client
+ Server site: https://sheltered-lowlands-84372.herokuapp.com/
+ Server repo: https://github.com/zzyyfff/chat-api

## Technologies used

+ Javascript
+ Node.js
+ Express.js
+ Mongoose
+ MongoDB

## Getting involved

Interested in playing with the code or contributing? Read on.

#### Prerequisites

+ You will likely want to set up the [Chat Client](https://github.com/zzyyfff/chat-client). See further installation instructions on its repo: https://github.com/zzyyfff/chat-client
+ Any text editor will do. I use [Atom](https://atom.io/), which makes development easier.

#### Setup Environment:
1.  Fork and clone the respository locally
1.  Install dependencies with `npm install`.
1.  Ensure that you have nodemon installed by running `npm install -g nodemon`
1.  Ensure the server can run properly by running `npm run server`
1.  `git add` and `git commit` your changes.
1.  For deployment, you can follow GA's deployment guide: https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide

## Planning and Development

This project is born out of the Software Engineering Immersive course at General Assembly Boston (formerly the WDI, Web Development Immersive) and is the server side of my first React-based web app project.

#### My Process

1. Consider and brainstorm on the mission and goals of the project, based on the project requirements.
2. Perform user research; talking to potential users about what they would look for in a chat app and what they would need or want from it.
3. List out the functionality of an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) and separately bucket future functionality that would not be part of the [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).
4. Draw up wireframes and settle on an initial interface design goal. The final interface will change through user testing and redesign.
5. Create user stories
6. Prioritize user stories, putting the ones with the most dependents first
7. Create an ERD (*See ERD below*)
7. Implement a back-end API with Ruby/Rails/PostgreSQL
8. Create the basic layout of UI elements in HTML/CSS/SASS/Bootstrap/Handlebars, using semantic tags when possible and only enough styling to meet [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) layout needs.
9. Connnect front-end elements to the back-end API.
10. Test, troubleshoot, debug, refactor, and confirm working deployment.
11. If there is enough time, begin work on stretch goal features and test them in deployment
12. Fill in README.md
13. Once all base functionality is established, apply aesthetic style

## collections

```md
users

chats

messages
```

## First draft ERD

![img_9560](https://media.git.generalassemb.ly/user/18598/files/f21b8d80-5f5d-11e9-8e0a-120fb0a2962f)

## API End Points

| Verb   | URI Pattern              | Controller#Action     |
|--------|--------------------------|-----------------------|
| POST   | `/sign-up`               | `users#signup`        |
| POST   | `/sign-in`               | `users#signin`        |
| DELETE | `/sign-out`              | `users#signout`       |
| PATCH  | `/change-password`       | `users#changepw`      |
| GET    | `/chats`                 | `chats#index`         |
| GET    | `/chats/:id`             | `chats#show`          |
| POST   | `/chats`                 | `chats#create`        |
| DELETE | `/chats/:id`             | `chats#destroy`       |
| PATCH  | `/chats/:id`             | `chats#update`        |
| GET    | `/messages`              | `messages#index`      |
| GET    | `/messages/:id`          | `messages#show`       |
| POST   | `/messages`              | `messages#create`     |
| DELETE | `/messages/:id`          | `messages#destroy`    |
| PATCH  | `/messages/:id`          | `messages#update`     |

All data returned from API actions is formatted as JSON.

## Problem Solving Strategy

When a functional element doesn't work as exepcted, my strategy is to break down the element into smaller parts, testing to make sure each is functioning as expected. In Javascript, this might involve using `console.log` and also testing functionality via curl scripts. In all situations, I carefully follow the logical sequence of events and make sure I understand what is going on.

When I've exhausted my own ability to debug a situation, I begin formulating how I would communicate this problem to others. I search online for similar issues and educate myself about the technologies and surrounding issues.

Finally, if an answer hasn't been found, I create a showcase of the problem, including example code, the steps to reproduce the problem, and what I've attempted so far, and I use this to ask for help from colleagues and the community of programers.

## Unsolved Problems & Future Direction

+ Allowing users to search for other users to chat with.
+ Implement websockets to facilitate realtime features, like being able to see what your chat partner is typing, if desired.
+ Be able to share rich media in a chat, other than just text.
+ Be able to share your location in a chat.
+ Push notifications for when the user is offline.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact jonathan.marcus@gmail.com.

## Acknowledgments

Special thanks to Dr. Edward Marcus, Jennifer Meade, Caleb Pearce, Erica Salling, Ben Jenkins, Toni Langley, Jordan Allain, Naida Rosenberger, GA WDI-30, and everyone at General Assembly Boston.
