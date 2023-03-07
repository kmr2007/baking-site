// Quiz

//Global Variables
let QuestionsCorrect = 0;

let q2aEl = document.getElementById("q2-a");
let q2bEl = document.getElementById("q2-b");
let q2cEl = document.getElementById("q2-c");
let q2dEl = document.getElementById("q2-d");

//Event Listeners
document.getElementById("btn").addEventListener("click", btnClicked);

//Functions
function btnClicked() {
  let q1Response = document.getElementById("q1-in").value.toLowerCase();
  //   let q3ResponseA = document.getElementById("q3-a").value.toLowerCase();
  //   let q3ResponseB = document.getElementById("q3-b").value.toLowerCase();
  //   let q3ResponseC = document.getElementById("q3-c").value.toLowerCase();
  //   let q4Response = document.getElementById("q4-in").value.toLowerCase();
  //   let q5Response = document.getElementById("q5-in").value.toLowerCase();
  // Question 1
  if (q1Response === "ancient rome" || q1Response === "rome") {
    ++QuestionsCorrect;
    document.getElementById("q1").classList.add("correct");
  } else {
    document.getElementById("q1").classList.add("incorrect");
  }
  //Question 2
  console.log(q2bEl.value);
}
