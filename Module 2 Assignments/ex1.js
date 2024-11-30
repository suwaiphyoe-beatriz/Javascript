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
