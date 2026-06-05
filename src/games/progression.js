const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function getGameData() {
  const length = 10;
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = [];
  let correctAnswer = '';

  for (let i = 0; i < length; i += 1) {
    const value = start + i * step;
    if (i === hiddenIndex) {
      progression.push('..');
      correctAnswer = String(value);
    } else {
      progression.push(String(value));
    }
  }

  const question = progression.join(' ');
  return { question, correctAnswer };
}
