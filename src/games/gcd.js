import game from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getData = () => {
  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, answer };
};

export default () => game(task, getData);
