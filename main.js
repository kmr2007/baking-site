// Quiz

//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

//Function
function btnClicked() {
  //Variables
  let q1El = document.getElementById("q1");
  let q2El = document.getElementById("q2");
  let q3El = document.getElementById("q3");
  let q4El = document.getElementById("q4");
  let q5El = document.getElementById("q5");
  let q1Response = document.getElementById("q1-in").value.toLowerCase();
  let q2B = document.getElementById("q2-b");
  let q3ResponseA = document.getElementById("q3-a").value.toLowerCase();
  let q3ResponseB = document.getElementById("q3-b").value.toLowerCase();
  let q3ResponseC = document.getElementById("q3-c").value.toLowerCase();
  let q4Response = document.getElementById("q4-in").value.toLowerCase();
  let q5Response = document.getElementById("q5-in").value.toLowerCase();
  let QuestionsCorrect = 0;

  //Clear Previous Attempt
  q1El.classList.remove("correct");
  q1El.classList.remove("incorrect");
  q2El.classList.remove("correct");
  q2El.classList.remove("incorrect");
  q3El.classList.remove("correct");
  q3El.classList.remove("incorrect");
  q4El.classList.remove("correct");
  q4El.classList.remove("incorrect");
  q5El.classList.remove("correct");
  q5El.classList.remove("incorrect");

  // Question 1
  if (q1Response === "ancient rome" || q1Response === "rome") {
    ++QuestionsCorrect;
    q1El.classList.add("correct");
  } else {
    q1El.classList.add("incorrect");
  }
  // Question 2
  if (q2B.checked) {
    q2El.classList.add("correct");
    ++QuestionsCorrect;
  } else {
    q2El.classList.add("incorrect");
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
    q3El.classList.add("correct");
    ++QuestionsCorrect;
  } else {
    q3El.classList.add("incorrect");
  }
  // Question 4
  if (q4Response === "giselle courteau" || q4Response === "giselle") {
    q4El.classList.add("correct");
    ++QuestionsCorrect;
  } else {
    q4El.classList.add("incorrect");
  }

  // Question 5
  if (q5Response === "nanaimo bars" || q5Response === "nanaimo bar") {
    q5El.classList.add("correct");
    ++QuestionsCorrect;
  } else {
    q5El.classList.add("incorrect");
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
