import game from '../index.js';

const minStep = 1;
const maxStep = 9;
const length = 10;
const maxFirstMember = 9;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const task = 'What number is missing in the progression?';

const getData = () => {
  const step = getRandomNumber(minStep, maxStep);
  const indexOfHiddenNumber = getRandomNumber(0, length - 1);
  const firstMember = getRandomNumber(1, maxFirstMember);
  const answer = String(firstMember + (indexOfHiddenNumber * step));
  let question = '';
  for (let i = 0; i < length; i += 1) {
    const currentMember = firstMember + (i * step);
    if (i !== indexOfHiddenNumber) {
      question = `${question}${currentMember} `;
    } else {
      question = `${question}.. `;
    }
  }
  question = question.trim();
  return { question, answer };
};

export default () => game(task, getData);
