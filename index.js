const readlineSync = require("readline-sync");
const chalk=require("chalk");
const questions=require("./constants").questions;

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log();
readlineSync.question("Welcome "+chalk.yellowBright(userName)+", let's see how well do you know Sohail"+" hit enter to continue",
{hideEchoBack: true, mask: ''});


var highScores = {
  first:{
    name: "Junaid",
    score: 3,
  },

  second:{
    name: "Umair",
    score: 2,
  },
}

function play(question, answer) {
  console.log();
  var userAnswer = readlineSync.question(chalk.cyanBright(question));
  console.log();
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("right!"));
    score = score + 1;   
  } else {
    console.log(chalk.red("wrong!"));
  }

  console.log();
  console.log("current score: ", score);
  console.log("-----------------")
}

function scoreComparison(currentScore,highestScorer){
    console.log();

    if(currentScore>=highestScorer.first.score){
      console.log("Congratulations...!!! you have the new high score of "+chalk.bold(currentScore)+", please send us a screenshot so that we can update the highest scorer")
    }else if(currentScore>=highestScorer.second.score){
      console.log("Congratulations...!!! you have the new second high score of "+chalk.bold(currentScore)+", please send us a screenshot so that we can update the second highest scorer")
    }else{
      console.log("You have scored "+chalk.bold(currentScore)+" points"+"\n\n"+"The List of top 2 Scores \n"+chalk.bold(highestScorer.first.name)+" : "+chalk.bold(highestScorer.first.score)+"\n"+chalk.bold(highestScorer.second.name)+" : "+chalk.bold(highestScorer.second.score));
    }
  }

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

scoreComparison(score,highScores);
