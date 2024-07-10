let score = -180;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your score: ', (input) => {
    const score = parseInt(input);

    if (score > 100 || score < 0) {
        console.log("Error: invalid score!");
    } else if (score >= 85) {
        console.log("You got an A");
    } else if (score >= 75) {
        console.log("You got a B");
    } else if (score >= 65) {
        console.log("You got a C");
    } else if (score >= 55) {
        console.log("You got a D");
    } else if (score >= 45) {
        console.log("You got an E");
    } else if (score >= 0) {
        console.log("You got an F");
    } else {
        console.log("Error: invalid score");
    }

    rl.close();
});