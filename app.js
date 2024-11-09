let gameSeq = [];
let userSeq = [];

let btns = ["1", "2", "3", "4"];

let started = false;
let level = 0;

let h5 = document.querySelector("h5");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log(started);

    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 750);
}

function levelUp() {
  level++;
  h5.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[randIdx];
  let randBtn = document.
    querySelector(`#box${randomColor}`);
  gameSeq.push(randomColor);

  console.log(gameSeq);

  console.log(`${randIdx}`);
  console.log(`#box${randomColor}`);
  console.log(`randBtn${randBtn}`);

  btnFlash(randBtn);
}
