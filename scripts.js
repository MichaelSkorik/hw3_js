//Задача 1

function cube(num) {
    return num ** 3;
}

let result = cube(2) + cube(3);
console.log(result); // Выводит 35


//Задача 2

function calculateNetSalary(salary) {
    if (isNaN(salary)) {
        console.log("Значение задано неверно");
        return;
    }
    let netSalary = salary * 0.87;
    console.log(`Размер заработной платы за вычетом налогов равен ${netSalary}`);
}

let userInput = prompt("Введите сумму заработной платы:");
let salary = parseFloat(userInput);
calculateNetSalary(salary);

//Задача 3

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let number3 = parseFloat(prompt("Введите третье число:"));

let maxNumber = findMax(number1, number2, number3);
console.log(`Максимальное значение: ${maxNumber}`);

//Задача 4

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a - b : b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(2, 6)); // Выводит 8
console.log(subtract(6, 2)); // Выводит 4
console.log(multiply(2, 6)); // Выводит 12
console.log(divide(6, 2)); // Выводит 3