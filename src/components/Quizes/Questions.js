export const Questions = [
  //READ ME
  //-questions are dynamic, only thing that needs to be manually changed
  //or adjusted is the start and end of each Quiz.
  //-If you want to add your own questions follow the current layout,
  //but MAKE SURE YOU UPDATE THE QUIZ START AND END

  //---------------Our Solar System Begin--------------
  //index: 0-4

  {
    text: "What is the biggest planet in our solar system?",
    options: [
      { id: 0, text: "Saturn", isCorrect: false },
      { id: 1, text: "Jupiter", isCorrect: true },
      { id: 2, text: "Uranus", isCorrect: false },
      { id: 3, text: "Neptune", isCorrect: false },
    ],
  },
  {
    text: "Which planet does not have rings?",
    options: [
      { id: 0, text: "Saturn", isCorrect: false },
      { id: 1, text: "Jupiter", isCorrect: false },
      { id: 2, text: "Uranus", isCorrect: false },
      { id: 3, text: "Neptune", isCorrect: false },
      {
        id: 4,
        text: "All of these have rings (technically)",
        isCorrect: true,
      },
    ],
  },

  {
    text: "Which planet is closest to the sun?",
    options: [
      { id: 0, text: "Mercury", isCorrect: true },
      { id: 1, text: "Venus", isCorrect: false },
      { id: 2, text: "Earth", isCorrect: false },
      { id: 3, text: "Mars", isCorrect: false },
    ],
  },
  {
    text: "[LIGHTNING ROUND] Which criteria for a full-sized planet does pluto fail?",
    options: [
      { id: 0, text: "It is in orbit around The Sun", isCorrect: false },

      {
        id: 1,
        text: "It has sufficient mass to assume hydrostatic equilibrium (a nearly round shape)",
        isCorrect: false,
      },
      {
        id: 2,
        text: "It has 'cleared the neighborhood' around its orbit",
        isCorrect: true,
      },
    ],
  },

  {
    text: "Which planet is closest to the asterioid belt?",
    options: [
      { id: 0, text: "Earth", isCorrect: false },
      { id: 1, text: "Saturn", isCorrect: false },
      { id: 2, text: "Mars", isCorrect: true },
      { id: 3, text: "Venus", isCorrect: false },
    ],
  },

  //---------------------Solar System End --------------------

  //---------------------Cosmos Begin-----------------------
  //index: 5-7
  {
    text: "Test for Cosmos",
    options: [
      { id: 0, text: "Test", isCorrect: true },
      { id: 1, text: "Test", isCorrect: true },
      { id: 2, text: "Test", isCorrect: true },
      { id: 3, text: "Test", isCorrect: true },
    ],
  },
  {
    text: "Test for Cosmos",
    options: [
      { id: 0, text: "Test", isCorrect: true },
      { id: 1, text: "Test", isCorrect: true },
      { id: 2, text: "Test", isCorrect: true },
      { id: 3, text: "Test", isCorrect: true },
    ],
  },
  {
    text: "Test for Cosmos",
    options: [
      { id: 0, text: "Test", isCorrect: true },
      { id: 1, text: "Test", isCorrect: true },
      { id: 2, text: "Test", isCorrect: true },
      { id: 3, text: "Test", isCorrect: true },
    ],
  },

  //---------------------Cosmos End-----------------------
];
