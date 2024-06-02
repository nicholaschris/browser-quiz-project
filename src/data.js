//src/data.js
/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  currentScore: 0,
  // the questions in the quiz
  questions: [
    {
      text: `Who is Luke Skywalker's father?`,
      answers: {
        a: 'Han Solo',
        b: 'Darth Vader',
        c: 'Obi-Wan Kenobi',
        d: 'Mace Windu'
      },
      correct: 'b',
      selected: null,
    },
    {
      text: `What is the name of Han Solo's ship?`,
      answers: {
        a: 'Star Destroyer',
        b: 'TIE Fighter',
        c: 'Millennium Falcon',
        d: 'X-Wing',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'Who is the Supreme Leader of the First Order?',
      answers: {
        a: 'Master Yoda',
        b: 'Count Doku',
        c: 'Darth Sidius',
        d: 'Snoke',
      },
      correct: 'd',
      selected: null,
      links: [
      ],
    },
    {
      text: `What color is Mace Windu's lightsaber?`,
      answers: {
        a: 'Green',
        b: 'Purple',
        c: 'Black',
        d: 'blue',
      },
      correct: 'b',
      selected: null,
      links: [
      ],
    },
    {
      text: 'Who trained Obi-Wan Kenobi as a Jedi?',
      answers: {
        a: 'Anakin Skywalker',
        b: 'Yoda',
        c: 'Qui-Gon Jinn',
        d: 'Mace Windu',
      },
      correct: 'c',
      selected: null,
      links: [
      ],
    },
    {
      text: 'What planet is Princess Leia from?',
      answers: {
        a: 'Alderaan',
        b: 'Naboo',
        c: 'Tatooine',
        d: 'Endor',
      },
      correct: 'a',
      selected: null,
      links: [
      ],
    },
    {
      text: `What color is Yoda's lightsaber in "Attack of the Clones"?`,
      answers: {
        a: 'Blue',
        b: 'Green',
        c: 'Red',
        d: 'Black',
      },
      correct: 'b',
      selected: null,
      links: [
      ],
    },
    {
      text: 'What is the name of the Wookiee co-pilot of the Millennium Falcon?',
      answers: {
        a: 'Chewebacca',
        b: 'Grogu',
        c: 'Jabba the Hutt',
        d: 'Lando',
      },
      correct: 'a',
      selected: null,
      links: [
      ],
    },
    {
      text: 'What was the purpose of Order 66?',
      answers: {
        a: 'To initiate a clone rebellion',
        b: 'To assassinate Emperor Palpatine',
        c: 'To Exterminate the Jedi Order',
        d: 'To begin a peace treaty with the Separatists',
      },
      correct: 'c',
      selected: null,
      links: [
      ],
    },
    {
      text: 'Who is the Jedi Master that ordered the creation of the clone army?',
      answers: {
        a: 'Yoda',
        b: 'Qui-Gon Jinn',
        c: 'Sifo-Dyas',
        d: 'Mace Windu',
      },
      correct: 'c',
      selected: null,
      links: [
      ],
    }
  ],
};
