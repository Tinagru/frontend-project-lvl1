import game from '../index.js';

import getRandomValue from '../getRandomValue.js';

const task = 'Find the greatest common divisor of given numbers.';

const min = 0;
const max = 100;

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const getData = () => {
  const num1 = getRandomValue(min, max);
  const num2 = getRandomValue(min, max);
  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, answer };
};

export default () => game(task, getData);
