'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Bhosarpappu🤬';
  } else if (guess === Secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = Secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > Secretnumber ? 'Too high📈' : 'Too Low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose😅';
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > Secretnumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too high📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose😅';
  //   }

  //   // When guess is too low
  // } else if (guess < Secretnumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose😅';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
