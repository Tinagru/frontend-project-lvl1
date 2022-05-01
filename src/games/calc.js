import game from '../index.js';

const task = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperator = () => {
  let RandomOperator = '';
  const possible = '+-*';
  for (let i = 0; i < 1; i += 1) {
    RandomOperator += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return RandomOperator;
};

const getData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return false;
  }
  const answer = String(result);
  const question = `${num1} ${operator} ${num2}`;
  return { question, answer };
};

export default () => game(task, getData);
