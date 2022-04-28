import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const getRandomOperator = () => {
    let RandomOperator = '';
    const possible = '+-*';
    for (let i = 0; i < 1; i += 1) {
      RandomOperator += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return RandomOperator;
  };
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = getRandomOperator();
    console.log(`Question: ${number1} ${operator} ${number2} `);
    const youAnswer = readlineSync.question('You answer: ');
    let result;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        return false;
    }
    if (youAnswer === String(result)) {
      console.log('Correct!');
    } else {
      console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
