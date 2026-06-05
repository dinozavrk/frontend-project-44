import readlineSync from 'readline-sync';

export default function greetUser() {
  console.log('Добро пожаловать в Brain Games!');
  const name = readlineSync.question('Как вас зовут? ');
  console.log(`Привет, ${name}!`);
  return name;
}