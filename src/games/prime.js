import game from '../index.js';

import getRandomValue from '../functions.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function prime(num) {
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const min = 1;
const max = 100;

const getData = () => {
  const question = getRandomValue(min, max);
  const answer = prime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, getData);
