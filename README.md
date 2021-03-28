# Getting Started

This repository functions as the basis of the quiz project in the [Browsers module](https://github.com/HackYourFuture/Browsers). Before the first group meeting, have a look through this code and try to understand how it works and how it is organised. We will explain the idea behind the structure below as well as the Backlog (which will identify what is needed to be implemented).

We have already implemented a very basic UI that can go through the questions to show you how this kind of code is split and how you can use the structure to your advantage. Have a look through it before your first group meeting as it can take a little while to get your head around it!

## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

# Structure

Let's run through the folders:

```
public
src
└── handlers
└── init
└── listeners
└── utils
└── views
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `handlers` this contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
- `init` this contains our initialisation code. Generally this code should only run once and starts the application
- `listeners` this contains our code that links up our handler code to the DOM. This is separate because it is possible to have the same handler code be given to different listeners
- `utils` this contains code that are pure functions and can be used throughout the application. These functions take data and give back a result. They should not interact with anything outside of their scope!
- `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the handlers do.
- `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

# Backlog

So what should be built? Below is a collection of user stories you can choose from. Stories inside of each priority level are not necessarily in order, it's up to your group to decide how they fit into your strategy. These are also just suggestion, feel free to change them or create your own! Feel free to get creative.

## Must-Haves

> these are necessary for basic usability

- [ ] A user can see all questions
  - _acceptance criteria ..._
- [ ] A user can select an answer for each question
  - _acceptance criteria ..._
- [ ] A user can know which questions they got correct and incorrect
  - _acceptance criteria ..._
- [ ] A user can see the correct answer for questions
  - _acceptance criteria ..._
- [ ] A user can see their score at the end of the quiz
  - _acceptance criteria ..._

## Should-Haves

> these will complete the user experience, but are not necessary

- [ ] A user can see one question at a time, stepping through the quiz (may require refactoring)
  - _acceptance criteria ..._
- [ ] A user can see their score update in real-time as they select answers
  - _acceptance criteria ..._

## Could-Haves

> would be really cool ... if there's time

- [ ] A user can modify a question in the quiz
  - _acceptance criteria ..._
- [ ] A user has access to resources for further study on each question
  - _acceptance criteria ..._
- [ ] A user can "cheat" to see the correct answer, this forfeits the question
  - _acceptance criteria ..._
- [ ] A user can remove questions from the quiz
  - _acceptance criteria ..._
- [ ] A user can add questions to the quiz
  - _acceptance criteria ..._


