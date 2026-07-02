
// HOME SCORE COUNTER
let hs = document.getElementById("homescore");
let hscore = 0;
function plush1() {
  hscore += 1;
  hs.innerText = hscore;
  checklead();
}
function plush2() {
  hscore += 2;
  hs.innerText = hscore;
  checklead();
}
function plush3() {
  hscore += 3;
  hs.innerText = hscore;
  checklead();
}

//GUEST SCORE COUNTER
let gs = document.getElementById("guestscore");
let gscore = 0;

function plusg1() {
  gscore += 1;
  gs.innerText = gscore;
  checklead();
}
function plusg2() {
  gscore += 2;
  gs.innerText = gscore;
  checklead();
}
function plusg3() {
  gscore += 3;
  gs.innerText = gscore;
  checklead();
}

// CHECK LEADING TEAM
function checklead() {
  if (hscore > gscore) {
    hs.style.border = "7px dotted yellow";
    gs.style = "none";
  } else if (hscore < gscore) {
    gs.style.border = "7px dotted yellow";
    hs.style = "none";
  } else {
    hs.style = "none";
    gs.style = "none";
  }
}

// PERIOD
let statusEl = document.getElementById("status");
let period = document.getElementById("period");
let per = 1;
function updateper() {
  
  if (per < 4) per++;
  period.innerText = "PERIOD:" + per;
  time = 60;
  timeEl.innerText = time;
}

// TIMER COUNTER
let timeEl = document.getElementById("timer");
let time = 60;
let interval = null;

function starttimer() {
  clearInterval(interval);


  interval = setInterval(function () {
    time--;
    timeEl.innerText =String(time).padStart(2,"0");
    if (time <= 0) {
      clearInterval(interval);
  
      if (per == 4) {
        statusEl.innerText = "GAMEOVER";
        winner();
      } else {
        timeEl.innerText = "TIME OUT";
      }
    }
  }, 1000);

}

// PAUSETIMER
function pausetimer() {
  clearInterval(interval);
}

//RESET TIMER
function reset() {
  clearInterval(interval);
  time = 60;
  timeEl.innerText = time;
}

// FOUL COUNTER
let foulElhome = document.getElementById("foulh");
let foulElguest = document.getElementById("foulg");
let fh = 0;
let fg = 0;

function homefoul() {
  fh += 1;
  foulElhome.innerText = "FOUL:" + fh;
}
function guestfoul() {
  fg += 1;
  foulElguest.innerText = "FOUL:" + fg;
}

//   winner
let win = document.getElementById("winner");
function winner() {
  if (gscore > hscore) {
    win.innerText = "🎉GUEST won the game by " + (gscore - hscore) + " points🎉";
  } else if (gscore < hscore) {
    win.innerText = "🎉HOME won the game by " + (hscore - gscore) + " points🎉";
  } else {
    win.innerText = "match draw";
  }
}

// RESTART
function newgame() {
  hscore = 0;
  gscore = 0;
  hs.innerText = hscore;
  gs.innerText = gscore;
  hs.style = "none";
  gs.style = "none";
  clearInterval(interval);
  time = 60;
  timeEl.innerText = time;
  fh = 0;
  fg = 0;
  per = 1;
  period.innerText = "PERIOD:" + per;
  foulElhome.innerText = "FOUL:" + fh;
  foulElguest.innerText = "FOUL:" + fg;
}
