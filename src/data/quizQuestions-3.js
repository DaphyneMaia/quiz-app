
export const quizQuestions_3 = {
  questions: [
    {
      question: 'What is the purpose of the useState hook in React?',
      choices: [
      'To declare a variable in a functional component',
      'To manage and update state in a functional component',
      'To create a new stateful class component',
      'None of the above',
    ],
    correctAnswer: 'To manage and update state in a functional component',
  },
  {
    question: 'How can you import a function myFunction from a file named utils.js in another file?',
    choices: [
      'import { myFunction } from "utils.js";',
      'require("utils.js").myFunction;',
      'import myFunction from "utils.js";',
      'None of the above',
    ],
    correctAnswer: 'import { myFunction } from "utils.js";',
  },
    {
      question: 'What does the map() method do in JavaScript?',
      choices: [
      'Iterates through each element of an array and returns a new array',
      'Filters the elements of an array based on a condition',
      'Reduces the array to a single value',
      'None of the above',
    ],
    correctAnswer: 'Iterates through each element of an array and returns a new array',
  },
  {
    question: 'How do you destructure the name property from an object person in a single line?',
    choices: [
      'const { name } = person;',
      'const name = person.name;',
      'person.destructure("name");',
      'None of the above',
    ],
    correctAnswer: 'const { name } = person;',
  },
    {
      question: 'What does the following ternary operator do in JavaScript/React?',
      choices: [
      'Checks if isTrue is equal to "Yes"',
      'Returns "Yes" if isTrue is truthy, otherwise "No"',
      'Checks if isTrue is a boolean',
      'None of the above',
    ],
    correctAnswer: 'Returns "Yes" if isTrue is truthy, otherwise "No"',
  },
  {
    question: 'How can you use short-circuiting to set a default value for a variable myVar if it\'s undefined?',
    choices: [
      'const myVar = myVar || "default";',
      'const myVar = myVar ?? "default";',
      'const myVar = myVar ? myVar : "default";',
      'None of the above',
    ],
    correctAnswer: 'const myVar = myVar || "default";',
  },
    {
      question: 'In React, what is the primary purpose of the useEffect hook?',
    choices: [
      'To declare variables in functional components',
      'To manage side effects in functional components',
      'To create class-based components',
      'None of the above',
    ],
    correctAnswer: 'To manage side effects in functional components',
  },
  {
    question: 'Which method is used to update the state in a React class component?',
    choices: [
      'this.updateState()',
      'this.setState()',
      'updateState()',
      'None of the above',
    ],
    correctAnswer: 'this.setState()',
  },
  {
    question: 'What is the purpose of the key prop in React when rendering a list of components?',
    choices: [
      'It provides a unique identifier for each component in the list',
      'It defines the order of components in the list',
      'It is used to style each component individually',
      'None of the above',
    ],
    correctAnswer: 'It provides a unique identifier for each component in the list',
  },
  {
    question: 'How can you conditionally render content in React using a ternary operator?',
    choices: [
      '{ condition ? <TrueComponent /> : <FalseComponent /> }',
      '{{ condition && <TrueComponent /> }}',
      '{{ condition || <FalseComponent /> }}',
      'None of the above',
    ],
    correctAnswer: '{ condition ? <TrueComponent /> : <FalseComponent /> }',
  },
  ],
}