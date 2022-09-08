console.log("[simple-timer] init");

let isTimerActive = false;

function wait(ms) {
  console.log("[simple-timer#wait] ms", ms);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`[simple-timer#wait] waited ${ms}ms`);
    }, ms);
  });
}

function toggleTimer() {
  console.log("[simple-timer#toggleTimer] isTimerActive", isTimerActive);

  const button = document.getElementById("timer-button");
  const result = document.getElementById("timer-result");

  if (isTimerActive == false) {
    isTimerActive = !isTimerActive;
    runTimer();
    button.innerText = "STOP";
  } else {
    isTimerActive = !isTimerActive;
    button.innerText = "START";
    result.innerText = "";
  }
}

async function runTimer() {
  console.log("[simple-timer#runTimer]");

  let count = 0;
  const result = document.getElementById("timer-result");

  while (isTimerActive) {
    await wait(1);
    count += 1;
    result.innerText = count;
  }
}
