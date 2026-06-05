const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const PROGRESSION_LENGTH = 10;      // Длина прогрессии
const MIN_STEP = 1;                 // Минимальный шаг
const MAX_STEP = 10;                // Максимальный шаг
const MIN_START = 1;                // Минимальное начальное число
const MAX_START = 50;               // Максимальное начальное число

export default function getGameData() {
  const start = getRandomNumber(MIN_START, MAX_START);
  const step = getRandomNumber(MIN_STEP, MAX_STEP);
  const hiddenIndex = getRandomNumber(0, PROGRESSION_LENGTH - 1);

  const progression = [];
  let correctAnswer = '';

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
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