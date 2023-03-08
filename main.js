// Quiz

//Global Variables
let QuestionsCorrect = 0;

//Event Listeners
document.getElementById("btn").addEventListener("click", btnClicked);

//Functions
function btnClicked() {
  let q1Response = document.getElementById("q1-in").value.toLowerCase();
  let q2B = document.getElementById("q2-b");
  let q3ResponseA = document.getElementById("q3-a").value.toLowerCase();
  let q3ResponseB = document.getElementById("q3-b").value.toLowerCase();
  let q3ResponseC = document.getElementById("q3-c").value.toLowerCase();
  let q4Response = document.getElementById("q4-in").value.toLowerCase();
  let q5Response = document.getElementById("q5-in").value.toLowerCase();
  // Question 1
  if (q1Response === "ancient rome" || q1Response === "rome") {
    ++QuestionsCorrect;
    document.getElementById("q1").classList.add("correct");
  } else {
    document.getElementById("q1").classList.add("incorrect");
  }
  // Question 2
  if (q2B.checked) {
    document.getElementById("q2").classList.add("correct");
    ++QuestionsCorrect;
  } else {
    document.getElementById("q2").classList.add("incorrect");
  }
  // Question 3
  if (
    (q3ResponseA === "butter" ||
      q3ResponseA === "sugar" ||
      q3ResponseA === "air") &&
    (q3ResponseB === "butter" ||
      q3ResponseB === "sugar" ||
      q3ResponseB === "air") &&
    (q3ResponseC === "butter" ||
      q3ResponseC === "sugar" ||
      q3ResponseC === "air") &&
    q3ResponseA !== q3ResponseB &&
    q3ResponseA !== q3ResponseC &&
    q3ResponseB !== q3ResponseC
  ) {
    document.getElementById("q3").classList.add("correct");
    ++QuestionsCorrect;
  } else {
    document.getElementById("q3").classList.add("incorrect");
  }
  // Question 4
  if (q4Response === "giselle courteau" || q4Response === "giselle") {
    document.getElementById("q4").classList.add("correct");
    ++QuestionsCorrect;
  } else {
    document.getElementById("q4").classList.add("incorrect");
  }

  // Question 5
  if (q5Response === "nanaimo bars" || q5Response === "nanaimo bar") {
    document.getElementById("q5").classList.add("correct");
    ++QuestionsCorrect;
  } else {
    document.getElementById("q5").classList.add("incorrect");
  }

  // Results
  let percentCorrect = (QuestionsCorrect / 5) * 100;
  if (percentCorrect > 50) {
    document.getElementById(
      "output"
    ).innerHTML = `${QuestionsCorrect}/5 (${percentCorrect}%) Great Job!`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `${QuestionsCorrect}/5 (${percentCorrect}%) Good try! Refresh to try again.`;
  }
}
