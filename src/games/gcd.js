const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  return findGcd(b, a % b);
};

export default function getGameData() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return { question, correctAnswer };
}
