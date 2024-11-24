//Module2
//Ex1
const numbers = [];
for (let i = 1; i <= 5; i++) {
    const input = prompt(`Enter number ${i}:`);
    numbers.push(Number(input));
}

const reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}
console.log("Numbers in reverse order:", reversedNumbers.join(", "));

//Ex2
function collectParticipants() {

    const numParticipants = Number(prompt("Enter the number of participants:"));
    if (isNaN(numParticipants) || numParticipants <= 0) {
        console.log("Please enter a valid positive number.");
        return;
    }

    const participants = [];

    for (let i = 0; i < numParticipants; i++) {
        const name = prompt(`Enter the name of participant ${i + 1}:`);
        participants.push(name.trim());
    }

    participants.sort();
    console.log("Participants in Alphabetical Order:");
    participants.forEach((participant, index) => {
        console.log(`${index + 1}. ${participant}`);
    });
}
collectParticipants();

//ex3
function collectDogNames() {
      const dogNames = [];

      for (let i = 1; i <= 6; i++) {
        const name = prompt(`Enter the name of dog ${i}:`);
        dogNames.push(name.trim());
      }

      dogNames.sort().reverse();

      const listElement = document.getElementById("dogList");
      listElement.innerHTML = "";
      dogNames.forEach((name) => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        listElement.appendChild(listItem);
      });
    }

//ex4
function collectAndSortNumbers() {
  const numbers = [];

  while (true) {

    const input = Number(prompt("Enter a number (enter 0 to stop):"));

    if (input === 0) break;

    numbers.push(input);
  }

  numbers.sort((a, b) => b - a);

  console.log("Numbers from largest to smallest:");
  numbers.forEach((number) => console.log(number));
}
collectAndSortNumbers();

//ex5
function collectUniqueNumbers() {
  const numbers = [];

  while (true) {
    const input = Number(prompt("Enter a number:"));

    if (numbers.includes(input)) {
      console.log(`The number ${input} has already been given. Stopping...`);
      break;
    }

    numbers.push(input);
  }

  numbers.sort((a, b) => a - b);

  console.log("Numbers in ascending order:");
  console.log(numbers);
}

collectUniqueNumbers();

//ex6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
  const listElement = document.getElementById("diceResults");
  listElement.innerHTML = "";

  let roll;
  do {
    roll = rollDice();
    const listItem = document.createElement("li");
    listItem.textContent = `Rolled: ${roll}`;
    listElement.appendChild(listItem);
  } while (roll !== 6);

  const listItem = document.createElement("li");
  listItem.textContent = "🎉 Rolled a 6! Stopping.";
  listElement.appendChild(listItem);
}

