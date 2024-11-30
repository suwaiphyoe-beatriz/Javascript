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