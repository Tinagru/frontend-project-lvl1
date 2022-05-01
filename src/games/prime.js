import game from '../index.js';

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
const getData = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const question = getRandomNumber();
  const answer = prime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, getData);
