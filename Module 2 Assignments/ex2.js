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