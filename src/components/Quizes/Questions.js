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
    text: "Which Philosopher believed the Earth revolved around the sun?",
    options: [
      { id: 0, text: "Socrates", isCorrect: false },
      { id: 1, text: "Aristotle", isCorrect: false },
      { id: 2, text: "Copernicus", isCorrect: true },
      { id: 3, text: "Galileo", isCorrect: false },
    ],
  },
  {
    text: "If Mercury is so close to the sun, why hasnt it burned away?",
    options: [
      {
        id: 0,
        text: "Its made of elements with a high melting point",
        isCorrect: false,
      },
      {
        id: 1,
        text: "It has no atmosphere & no oxygen which is needed for something to burn",
        isCorrect: true,
      },
      {
        id: 2,
        text: "Its not as close to the sun as we think it is",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Why isnt it Possible to walk on Planets like Jupiter, Saturn, Uranus, or Neptune?",
    options: [
      { id: 0, text: "Their gravity is too strong", isCorrect: false },
      { id: 1, text: "They are made of gas", isCorrect: true },
      { id: 2, text: "They are made of water", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What is the largest type of star in the universe?",
    options: [
      { id: 0, text: "Red Dwarf", isCorrect: false },
      { id: 1, text: "Neutron Star", isCorrect: false },
      { id: 2, text: "Super Giant", isCorrect: false },
      { id: 3, text: "Red Super Giant", isCorrect: true },
    ],
  },

  //---------------------Cosmos End-----------------------
  //
  //---------------------Science Theory-----------------------
  {
    text: "There are many theories about the birth of our solar system. Which theory invloves a passing star pulling dust and debris from the forming sun?",
    options: [
      { id: 0, text: "Tidal Theory", isCorrect: true },
      { id: 1, text: "Collision Theory", isCorrect: false },
      { id: 2, text: "ProtoPlanet Hypothesis", isCorrect: false },
      { id: 3, text: "Nebular Hypothesis", isCorrect: false },
    ],
  },

  {
    text: "The Planets make up what percentage of mass in our solar system??",
    options: [
      { id: 0, text: "0.0135%", isCorrect: false },
      { id: 1, text: "1.35%", isCorrect: false },
      { id: 2, text: "13.5%", isCorrect: false },
      { id: 3, text: "0.135%", isCorrect: true },
    ],
  },
  {
    text: "What are the only two planets in our solar system without moons?",
    options: [
      { id: 0, text: "Uranus & Neptune", isCorrect: false },
      { id: 1, text: "Neptune & Pluto", isCorrect: false },
      { id: 2, text: "Venus & Mars", isCorrect: false },
      { id: 3, text: "Mercuty & Venus", isCorrect: true },
    ],
  },
  {
    text: "What is the term for the condition where three celestial bodies are arranged in a straight line?",
    options: [
      { id: 0, text: "Occulation", isCorrect: false },
      { id: 1, text: "Syzygy", isCorrect: true },
      { id: 2, text: "Parallax", isCorrect: false },
      { id: 3, text: "Triple Transit", isCorrect: false },
    ],
  },
];
