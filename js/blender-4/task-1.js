// При натисканні на кнопку "SHOW ME", потрібно в консоль
// вивести значення, яке будемо вводити в інпут.
// <button id="alertButton">SHOW ME</button>
// <input id="alertInput" type="text" />

// const button = document.querySelector('#alertButton');
// console.log(button)
// const input = document.querySelector('#alertInput');
// console.log(input);
// button.addEventListener('click', () => {
//     console.log(input.value)
// });


// 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector('body');
// console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector('#title');
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
// const listNew = document.querySelector('.list');
// console.log(listNew);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopicEl = document.querySelectorAll("[data-topic]");
// console.log(dataTopicEl)

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataTopicFirstEl = dataTopicEl[0];
// console.log(dataTopicFirstEl);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataTopicLastEl = dataTopicEl[dataTopicEl.length - 1];
// console.log(dataTopicLastEl);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const headers = document.querySelectorAll('h3');
// console.log(headers);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// headers.forEach(function (header) {
//     header.classList.add("active");
// })

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const lincEl = document.querySelector('li[data-topic="navigation"]')

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// lincEl.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const p = lincEl.querySelector('p')
// p.textContent = "Я змінив тут текст!";


// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newLi = document.createElement('li');
// const newH3 = document.createElement('h3');
// const newP = document.createElement('p');
// newH3.textContent = 'Властивість innerHTML';
// newP.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// newLi.appendChild(newH3);
// newLi.appendChild(newP);
// const list = document.querySelector('.list');
// list.appendChild(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const newList = document.querySelector('.list')
// const newLiHTML = `
// <li>
// <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// </li>
// `;
// list.insertAdjacentHTML('beforeend', newLiHTML);



// Завдання 2..............................................................
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.createElement('div');
// numberContainer.classList.add("number-container");

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let i = 0; i < 100; i++) {
//     const number = randomNumber();
//     const div = document.createElement("div")
//     div.classList.add("number");
//     if (number % 2 === 0) {
//         div.classList.add("even");
//     } else {
//         div.classList.add("odd");
//     }
//     div.textContent = number;

//     numberContainer.appendChild(div);
// }
// document.body.appendChild(numberContainer);

// Завдання 3..............................................................
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const formElement = document.querySelector(".js-contact-form");
// const inputElement = document.querySelector(".js-username-input");
// const spunEL = document.querySelector(".js-username-output");

// function handleInput() {
//   const value = inputElement.value.trim();
  
//   if (value.length > 6) {
//     inputElement.classList.add("success");
//     inputElement.classList.remove("error");
//   } else {
//     inputElement.classList.add("error");
//     inputElement.classList.remove("success");
//   }

//   if (value === "") {
//     spunEL.textContent = "Anonymous";
//   } else {
//     spunEL.textContent = value;
//   }
// }

// inputElement.addEventListener("input", handleInput);

// inputElement.addEventListener("focus", () => {
//     const value = inputElement.value.trim();
//     if (value === "") {
//         inputElement.style.outline = '3px solid red';
//     } else {
//         inputElement.style.outline ='3px solid green';
//     }
// })

// inputElement.addEventListener("blur", () => {
//     const value = inputElement.value.trim();
//     if (value === "") {
//         inputElement.style.outline = '3px solid red';
//     } else {
//         inputElement.style.outline = '3px solid lime';
//     }
// })

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const value = inputElement.value.trim();
//     const checkboxElem = document.querySelector(".js-policy-checkbox");
//     if (checkboxElem.checked && value !== "") {
//         const userData = { userName: value }
//         console.log(userData);

//          // Очищаємо форму
//         inputElement.value = '';
//         checkboxElem.checked = false;
//         spunEL.textContent = 'Anonymous'; // <--- Оновили span
//         inputElement.classList.remove('success', 'error'); // <--- Щоб прибрати класи підсвічування
//         inputElement.style.outline = 'none'; // <--- І прибрати кольорову рамку
//     } else {
//         alert("Заповніть всі поля")
//     }
// });

//Завдання 4:....................................................................................
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const buttonDecrease = document.querySelector('#decrease');
// const buttonIncrease = document.querySelector('#increase');
// const box = document.querySelector('.box');

// // Функція для отримання числового значення width/height
// function getSizeInPixels(value) {
//   return parseInt(value, 10) || 0;
// }

// buttonDecrease.addEventListener("click", () => {
//   const currentWidth = getSizeInPixels(getComputedStyle(box).width);
//   const currentHeight = getSizeInPixels(getComputedStyle(box).height);

//   box.style.width = (currentWidth - 20) + 'px';
//   box.style.height = (currentHeight - 20) + 'px';
// });

// buttonIncrease.addEventListener("click", () => {
//   const currentWidth = getSizeInPixels(getComputedStyle(box).width);
//   const currentHeight = getSizeInPixels(getComputedStyle(box).height);

//   box.style.width = (currentWidth + 20) + 'px';
//   box.style.height = (currentHeight + 20) + 'px';
// });