// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//      if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number!';
//     }
//     return a < b ? a : b;
// }

function min(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Not a number!';
    }
    
    return a < b ? a : b;
    // if (a < b) {
    //     return a;
    // } else {
    //     return b;
    // }
}
console.log(min(0, 5));
console.log(min("нуль", 5));
console.log(min(5, true));
console.log(min(10, 3));  