//Завдання 1:////////////////////////////////////////////////
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// const value = numbers.map(number => number * number);
// console.log(value)



///Завдання 2://///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const allValues = data.flatMap(value => value.values);
// console.log(allValues);



//Завдання 3://////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const validAge = people.some(people => people.age < 20);
// console.log(validAge);



//Завдання 4://////////////////////////////////////////////////////////////////
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.every(numbers => numbers % 2 === 0);
// console.log(result);



// Завдання 5://////////////////////////////////////////////////////////////
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const result = numbers.find(numbers => numbers % 2 !== 0);
// console.log(result);



/////Завдання 6://////////////////////////////////////////////////////////////

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const ascendingScores = numbersArray.toSorted((a,b) => a-b);
// console.log(ascendingScores);

// const numbers = [101, 20, 25, 200, 40, 50, 5, 500]
// const numbers = numbers.toSorted();



/////Завдання 7:////////////////////////////////////////////////////////////
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const authorsInAlphabetOrder = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(authorsInAlphabetOrder);


// const words = [
//   "сонце",
//   "їжак",
//   "яблуко",
//   "іграшка",
//   "єнот",
//   "гора",
//   "світло",
//   "ґудзик",
//   "олень",
//   "зірка"
// ];

// const wordsШncorrectIorting = words.toSorted();
// console.log(wordsШncorrectIorting);

// const wordsIorting = words.toSorted((a, b) => a.localeCompare(b));
// console.log(wordsIorting);

//Завдання 8:////////////////////////////////////////////////////////////
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const userResult = users.toSorted((a, b) => a.age - b.age);
// console.log(userResult);

//Завдання 9:////////////////////////////////////////////////////////////
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const userResult = users.filter(user => user.age > 20);
// console.log(userResult);



//Завдання 10://////////////////////////////////////////////////////////////
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);



//Завдання 11/////////////////////////////////////////////////////////////////////
// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];

// const total = products
//     .filter(product => product.price > 10)
//     .reduce((sum, product) => sum + product.price, 0);

// console.log(total);



//Завдання 12/////////////////////////////////////////////////////////////////////
// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
// {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//     .flatMap(topic => topic.topics)
//     .filter((topic, index, array) => array.indexOf(topic) === index);

// console.log(allTopics);



//Завдання 13/////////////////////////////////////////////////////////////////////
// Порахуй загальну кількість лайків в категорії  Fashion


// const posts = [
//   { title: 'Post 1', likes: 20, category: 'Tech' },
//   { title: 'Post 2', likes: 45, category: 'Fashion' },
//   { title: 'Post 3', likes: 12, category: 'Tech' },
//   { title: 'Post 4', likes: 30, category: 'Fitness' },
//   { title: 'Post 5', likes: 15, category: 'Fashion' },
//   { title: 'Post 6', likes: 50, category: 'Tech' }
// ];

// const likesFashion = posts
//     .filter((userPost) => userPost.category === "Fashion")
//     .reduce((sum, userPost) => sum + userPost.likes, 0);
// console.log(likesFashion);



//Завдання 14/////////////////////////////////////////////////////////////////////
// Маємо масив об'єктів, який представляє список замовлень:
//Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// const list = orders
//     .filter(order => order.status === "completed")
//     .flatMap(order => order.products);

// console.log(list);



//Завдання 15/////////////////////////////////////////////////////////////////////
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     calculateArea() {
//         return this.height * this.width;
//     }
// }

// const prett1 = new Rectangle(5, 10)
// console.log(prett1);
// console.log(prett1.calculateArea());



//Завдання 16////////////////////////////////////////////////////////////////////
// Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 
// class Client {
//     #login
//     #email

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login
//     }
    
//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email
//     }
    
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const result = new Client("mango@gmail.com", "Mango");
// console.log(result.login);
// console.log(result.email);

// result.login = "Poly";
// result.email = "poly@gmail.com"
// console.log(result.login);
// console.log(result.email);



//Завдання 17////////////////////////////////////////////////////////////////////
// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//     static MAX_PRICE = 40000;

//     #price
    
//     constructor(price) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price
//     }
    
//     set price(newEmail) {
//         if (newEmail > Phone.MAX_PRICE) {
//             return;
//         }
//         this.#price = newEmail;
//     }

// }

// const phone= new Phone(45000);
// console.log(phone.price);
// phone.price=35000;
// console.log(phone.price);
// phone.price=45000;
// console.log(phone.price);



//Завдання 18////////////////////////////////////////////////////////////////////
 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 

// class Calculator {
//     constructor() {
//         this.value = 0;
//     }

//     number(value) {
//         this.value = value;
//         return this;
//     }

//     getResult() {
//          return this.value;
//     }

//     add(n) {
//         this.value += n;
//         return this;
//     }

//     substruct(n) {
//         this.value -= n;
//         return this;
//     }

//     divide(n) {
//         if (n === 0) {
//             console.log("Помилка: неможливо ділити на 0.");
//             return this;
//         } else {
//             this.value /= n;
//             return this;
//         }
//     }

//     multiply(n) {
//         this.value *= n;
//         return this;
//     }
// }

 // Приклад використання:
// const calc = new Calculator();
// const result = calc.number(10).add(5).substruct(3).multiply(4).divide(2).getResult()

// const result = calc
//    .number(10)   // Встановлюємо початкове значення 10
//    .add(5)       // Додаємо 5 (10 + 5 = 15)
//    .substruct(3)  // Віднімаємо 3 (15 - 3 = 12)
//    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//    .getResult(); // Отримуємо результат: 24
//console.log(result); // 24



//Завдання 19////////////////////////////////////////////////////////////////////
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.gender = params.gender;
        this.email = params.email;
    }
    
    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email
        }
        
    }
}
  const person1 = new Person({
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    email: 'johndoe@example.com'
});

console.log(person1.getDetails());

class Employee extends Person {
    constructor(params, salary, department) {
        super(params);
        this.salary = params.salary;
        this.department = params.department;
    }

    getEmployeeDetails() {
        return {
            salary: this.salary,
            department: this.department
        }
    }
}
// Приклад використання:
const employee1 = new Employee({
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    email: 'janesmith@example.com'
}, 5000, 'HR');

console.log(employee1.getDetails());
console.log(employee1.getEmployeeDetails());