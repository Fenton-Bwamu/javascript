// let age = 15;

// if (age >= 18) {
//     console.log("you can get a driver's license");
// } 


// else {
//     console.log("you cant get a license");
// }


// let time = 14;

// if (time < 12){
//     console.log("Good morning");
// }

// else if (time <18) {
//     console.log("Good afternoon");
// }

// else {
//     console.log("Good evening");
// }


let score = 80;

// Define the grade ranges and corresponding letters (sorted from lowest to highest)
const grades = [
  { minScore: 0, letterGrade: "F" },
  { minScore: 60, letterGrade: "D" },
  { minScore: 70, letterGrade: "C" },
  { minScore: 80, letterGrade: "B" },
  { minScore: 90, letterGrade: "A" }
];

// Loop through the grades array in reverse order
for (let i = grades.length - 1; i >=0; i--) {
  const grade = grades[i];
  if (score >= grade.minScore) {
    console.log("You could potentially get a", grade.letterGrade);
  }
}