import game from '../index.js';

const task = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => game(task, getData);
