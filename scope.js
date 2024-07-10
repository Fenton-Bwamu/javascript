let globalVar = "I'm global variable";

function demoScope() {
    let localVar = "I'm a local variable";
    console.log(globalVar);
    console.log(localVar);
}

demoScope();
console.log(globalVar);