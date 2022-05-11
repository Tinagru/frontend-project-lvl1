import game from '../index.js';

import getRandomValue from '../getRandomValue.js';

const task = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getData = () => {
  const num1 = getRandomValue(0, 100);
  const num2 = getRandomValue(0, 100);
  const operator = operators[getRandomValue(0, operators.length - 1)];
  const answer = `${calculation(num1, num2, operator)}`;
  const question = `${num1} ${operator} ${num2}`;
  return { question, answer };
};
export default () => game(task, getData);
