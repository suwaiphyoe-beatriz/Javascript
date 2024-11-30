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
