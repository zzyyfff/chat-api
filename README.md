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

#### Deploying to Heroku

Begin inside the root directory of your application.

1. Run `heroku create` in the command line in the root of the API to
create a new (blank) app on Heroku.
1. Commit to your local master branch
1. Push your latest code to Heroku (`git push heroku master`)
1. Setting up mLab on heroku:
  + Run heroku addons:create with mongolab:sandbox
`$ heroku addons:create mongolab:sandbox`
  + The first time you run the above command you may see a message like this:
  ```
  Creating mongolab:sandbox on ⬢ pacific-cliffs-91276... !
 ▸    Please verify your account to install this add-on plan (please enter a credit card) For more information, see
 ▸    https://devcenter.heroku.com/categories/billing Verify now at https://heroku.com/verify
 ```
 + You'll need to go to that URL, enter in your credit card information and then re-run the command again. This time you should see something like:
```
Creating mongolab:sandbox on ⬢ pacific-cliffs-91276... free
Welcome to mLab.  Your new subscription is being created and will be available
shortly. Please consult the mLab Add-on Admin UI to check on its progress.
Created mongolab-cubed-11237 as MONGODB_URI
Use heroku addons:docs mongolab to view documentation
```
  + Now you can log into your heroku dashboard, go to add-ons and click the mlab link. This will bring you to your mlab database.
  + If you already have an mLab account connected to your heroku account, you may see the second message and skip having to enter your credit card information.
  + Either way, if you see this output, it worked, and you can resume the following deployment steps.
1. in terminal, run: `git push heroku master`  (should build your site)
1. due to the first line of code in the `server.js` file, the default
deployment environment will be `production`
1. in terminal, run: `echo SECRET_KEY=$(openssl rand -base64 66 | tr -d '\n')`
this should generate a secret_key
1. in the terminal run:
`heroku config:set SECRET_KEY=<copy and paste secret_key generated from last command>`.
It should start with “SECRET_KEY= and a span of about 40 randomized characters”
1. you need to set your CLIENT_ORIGIN so that your deployed API will ONLY
accept requests from the correct domain. IF you're client is deployed on Github,
your ORIGIN will be:
      `https://<% github username %>.github.io`
1. Set your client ORIGIN by:
      `heroku config:set CLIENT_ORIGIN="https://<% github username %>.github.io"`
1. You should have three config variables set in heroku
(`heroku>settings>config vars`): MONGODB_URI, SECRET_KEY, CLIENT_ORIGIN
1. Once all three of these are set, run in terminal: `heroku restart`
1. Then in terminal, run: `heroku open`

A full list of Heroku commands can be accessed by running `heroku --help`

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
