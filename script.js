'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'πCorrect Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'β No Number!';
    // ------------------refactoring---------------
    displayMessage ('β No Number!');
  } else if (guess > 20 || guess < 0) {
    // document.querySelector('.message').textContent =
      // 'β Input Number Between 1 - 20!';
    displayMessage ('β Input Number Between 1 - 20!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'π Correct Number!';
    displayMessage ('π Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    if (highScore < score) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage ( guess > secretNumber ? 'π Too High!' : 'π Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage ('π₯ You Lost The Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  
  //-----------------------Refactoring---------------------------
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'π Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'π₯ You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'π Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'π₯ You Lost The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage ('Start guessing...');
  document.querySelector('.guess').disabled = false;
});
