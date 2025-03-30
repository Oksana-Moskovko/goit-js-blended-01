// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// let number = prompt("Введіть число(кількість хвилин)");
// const hour = number / 60;
// const minute = number % 60;
// const str1 = Math.floor(hour);
// const str2 = minute;
// alert(`${str1.padStart(2, "0")}:${str2.padStart(2, "0")}`);

let number = Number(prompt("Введіть число (кількість хвилин):")); // Перетворюємо введення в число

const hours = Math.floor(number / 60); // Отримуємо години (ціла частина)
const minutes = number % 60; // Залишок — це хвилини

// Перетворюємо числа в рядки та додаємо ведучі нулі
const strHours = String(hours).padStart(2, "0");
const strMinutes = String(minutes).padStart(2, "0");

console.log(`${strHours}:${strMinutes}`); // Виводимо результат у консоль
