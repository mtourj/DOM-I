// DOM selectors
let secondTens, secondOnes, msHundreds, msTens;

let timer = 0;

function incrementTimer (){
  secondTens = document.getElementById("secondTens");
  secondOnes = document.getElementById("secondOnes");
  msHundreds = document.getElementById("msHundreds");
  msTens = document.getElementById("msTens");

  timer += 0.01;

  updateUI();

  console.log(timer);

  if(timer >= 10){
    stopTimer();

    let elements = [secondTens, secondOnes, msHundreds, msTens];

    for (let i = 0; i < elements.length; i++){
      elements[i].classList.add('redDigit');
    }
  }
}

function stopTimer (){
  clearInterval(interval);
}

function updateUI (){
  secondTens.textContent = Math.floor(timer / 10);
  seconds = Math.floor(timer).toString();
  tenthSeconds = Math.floor(timer * 10).toString();
  hundredthSeconds = Math.floor(timer * 100).toString();
  secondOnes.textContent = seconds[seconds.length - 1];
  msHundreds.textContent = tenthSeconds[tenthSeconds.length - 1];
  msTens.textContent = hundredthSeconds[hundredthSeconds.length - 1];
}

interval = setInterval(incrementTimer, 10);