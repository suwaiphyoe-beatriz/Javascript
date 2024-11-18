
// Ex 1
console.log("I'm printing to console!");

// Ex2
const userName = prompt("Enter your name:");
document.getElementById("greeting").innerHTML = `Hello, ${userName}!`;


// Ex3
const first = +prompt('Enter the first integer');
const second = +prompt('Enter the second integer');
const third = +prompt('Enter the third integer');

document.querySelector('#sum').innerHTML = `The sum is ${first + second + third}`;
document.querySelector('#product').innerHTML = `The product is ${first * second * third}`;
document.querySelector('#average').innerHTML = `The average is ${(first + second + third) / 3}`;

//Ex 4
const studentName = prompt("Enter your name:");
const classnum = Math.floor(Math.random() * 4) + 1;
let getclass;

if (classnum === 1) {
  getclass = "Gryffindor";
} else if (classnum === 2) {
  getclass = "Slytherin";
} else if (classnum === 3) {
  getclass = "Hufflepuff";
} else {
  getclass = "Ravenclaw";
}
document.getElementById("sortingResult").innerHTML = `${studentName}, you are ${getclass}.`;

//Ex 5

const year = parseInt(prompt("Enter a year:"));
let rs;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  rs = `${year} is a leap year.`;
} else {
  rs = `${year} is not a leap year.`;
}
document.getElementById("rs").innerHTML = rs;

//Ex 6

const calculate = confirm("Should I calculate the square root?");

if (calculate) {
  const number = parseFloat(prompt("Enter a number:"));

  if (number < 0) {
    document.getElementById("result").innerHTML = "The square root of a negative number is not defined.";
  }
  else {

    const squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = `The square root of ${number} is ${squareRoot}.`;
  }
} else {
  document.getElementById("result").innerHTML = "The square root is not calculated.";
}

//ex7

function rollDice() {
  const numDice = document.getElementById('numDice').value;

  if (numDice < 1) {
    alert("Please enter a valid number of dice.");
    return;
  }

  let sum = 0;
  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
  }
  document.getElementById('res').innerHTML = `The sum of the dice rolls is: ${sum}`;
}


//ex8
function findLeapYears() {
  const startYear = parseInt(document.getElementById('startYear').value);
  const endYear = parseInt(document.getElementById('endYear').value);

  if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    alert("Please enter valid years.");
    return;
  }

  const leapYearsList = document.getElementById('leapYearsList');

  leapYearsList.innerHTML = "";

  for (let year = startYear; year <= endYear; year++) {
    if (isLeapYear(year)) {

      const li = document.createElement('li');
      li.textContent = year;
      leapYearsList.appendChild(li);
    }
  }
}

function isLeapYear(year) {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

//ex9

function checkPrime() {

  const num = parseInt(document.getElementById('number').value);

  if (isNaN(num) || num <= 1) {
    document.getElementById('result').innerText = "Please enter a valid integer greater than 1.";
    return;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    document.getElementById('finalresult').innerText = `${num} is a prime number.`;
  } else {
    document.getElementById('finalresult').innerText = `${num} is not a prime number.`;
  }
}

//ex10

function calculateProbability() {

  const numofDice = parseInt(document.getElementById('numofDice').value);
  const targetSum = parseInt(document.getElementById('targetSum').value);

  if (isNaN(numofDice) || isNaN(targetSum) || numofDice <= 0 || targetSum < numofDice || targetSum > numofDice * 6) {
    document.getElementById('results').innerText = "Please enter valid inputs: number of dice and a possible sum.";
    return;
  }

  let countMatches = 0;
  const simulations = 10000;

  for (let i = 0; i < simulations; i++) {
    let sum = 0;

    for (let j = 0; j < numofDice; j++) {
      sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === targetSum) {
      countMatches++;
    }
  }

  const probability = (countMatches / simulations) * 100;
  document.getElementById('results').innerText = `Probability to get sum ${targetSum} with ${numofDice} dice is ${probability.toFixed(2)}%`;
}


