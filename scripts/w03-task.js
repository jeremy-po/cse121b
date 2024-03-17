/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
  return number1 - number2;
};

let subtractNumbers = function() {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  return number1 / number2;
}

let divideNumbers = () => {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
  let subtotal = parseFloat(document.getElementById('subtotal').value);
  let membershipCheckbox = document.getElementById('member').checked;
  let discount = membershipCheckbox ? 0.2 : 0;
  let total = subtotal * (1 - discount);
  document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultiplied = multiplied.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;

