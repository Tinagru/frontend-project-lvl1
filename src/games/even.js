import game from '../index.js';

import getRandomValue from '../getRandomValue.js';

const task = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const min = 1;
const max = 100;

const getData = () => {
  const question = getRandomValue(min, max);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, getData);
