const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = [
  { symbol: '+', calculate: (a, b) => a + b },
  { symbol: '-', calculate: (a, b) => a - b },
  { symbol: '*', calculate: (a, b) => a * b },
];

export default function getGameData() {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${num1} ${operation.symbol} ${num2}`;
  const correctAnswer = String(operation.calculate(num1, num2));
  return { question, correctAnswer };
}
