"use strict";
const again = document.getElementById("again");
const checkbutton = document.querySelector("#check-button");
const requestnumberbox = document.getElementById("digit-box");
const hintP = document.getElementById("hint");
const scoreP = document.getElementById("score");
const lowscoreP = document.getElementById("lowscore");
const mainresultbox = document.getElementById("main-result");
const numberrange = document.getElementById("number-range");
const livesP = document.getElementById("lives");
checkbutton.addEventListener("click", compare);
again.addEventListener("click", reset);

const minNumber = 1;
const maxNumber = 20;
let gameOver = false;
let scores = [];
let lowscore = maxNumber;
const lives = 10;

numberrange.innerHTML = `&lsaquo;Between ${minNumber} and ${maxNumber}&rsaquo;`;
livesP.innerHTML = `Lives: ${lives}`;

const aleatory = function (minnum, maxnum) {
  const res = Math.floor(Math.random() * (maxnum - minnum) + 1);
  return res;
};

let hiddenresult = aleatory(minNumber, maxNumber);

function compare() {
  if (!gameOver) {
    writeScore();
    writeHint();
    livesP.innerHTML = `Lives: ${lives - scores.length}`;
  }
}

function writeHint() {
  let requestnumber = parseInt(requestnumberbox.value);
  if (requestnumber === hiddenresult) {
    mainresultbox.innerHTML = hiddenresult;
    hintP.innerHTML = "Congratullations you discovered it!";
    document.querySelector("body").style.backgroundColor = "green";
    mainresultbox.style.padding = "4% 8%";
    gameOver = true;
    writeLowscore();
  } else if (requestnumber > hiddenresult) {
    hintP.innerHTML = "Too High!";
  } else {
    hintP.innerHTML = "Too Low!";
  }
}

function writeScore() {
  let requestnumber = parseInt(requestnumberbox.value);
  if (scores.every((trys) => trys !== requestnumber)) {
    scores.push(requestnumber);
    scoreP.innerHTML = `Score: ${scores.length}`;
  } else {
    scoreP.innerHTML = `Score: ${scores.length} <br />don't repeat`;
  }
}

function reset() {
  gameOver = false;
  hintP.innerHTML = `Hint!`;
  scoreP.innerHTML = `Score:`;
  livesP.innerHTML = `Lives: ${lives}`;
  writeLowscore();
  scores = [];
  requestnumberbox.value = "";
  hiddenresult = aleatory(minNumber, maxNumber);
  mainresultbox.innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "rgba(5, 5, 5, 0.89)";
  mainresultbox.style.padding = "4%";
}

function writeLowscore() {
  if (scores.length < lowscore) {
    lowscore = scores.length;
    lowscoreP.innerHTML = `Lowscore: ${lowscore}`;
  }
}
