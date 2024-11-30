//ex 4
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
