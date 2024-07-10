const test = document.getElementById("test");

test.innerText = "Welcome World";

//creating new elements
const newItem = document.createElement("h1");
const headingTittle= document.createTextNode("My Name Is Fenton");

newItem.appendChild(headingTittle);

const printToDom = document.getElementById("newElement");
printToDom.appendChild(newItem);




const newDish = document.createElement("h1");
const headingTitledish= document.createTextNode("My Favorite Dish is ugali and meat");

newDish.appendChild(headingTitledish);

const printToDoms = document.getElementById("newElement");
printToDom.appendChild(newDish);



const newPets = document.createElement("h1");
const headingTitlpets= document.createTextNode("My Favorite Pet is a mouse");

newPets.appendChild(headingTitlpets);

const printeToDoms = document.getElementById("newElement");
printToDom.appendChild(newPets);


const newColor= document.createElement("h1");
const headingTitlecolor= document.createTextNode("My Favorite Color is yellow");

newColor.appendChild(headingTitlecolor);

const printeToDom = document.getElementById("newElement");
printToDom.appendChild(newColor);


