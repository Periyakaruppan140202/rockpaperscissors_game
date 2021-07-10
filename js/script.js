var x = document.getElementById("player_scr").innerHTML;
var y = document.getElementById("computer_scr").innerHTML;
function getRandom() {
  return Math.floor(Math.random() * 3) + 1;
}
document.getElementById("rock").addEventListener("click", play);
document.getElementById("paper").addEventListener("click", play);
document.getElementById("sci").addEventListener("click", play);
//1==Rock
//2==Paper
//3==Scissors

function play(e) {
  const ran = getRandom();
  if (this.id == "rock" && ran == 3) {
    document.getElementById("result").textContent = "Rock!! You Win!!";
    x++;
    document.getElementById("player_scr").innerHTML = x;
  } else if (this.id == "paper" && ran == 1) {
    document.getElementById("result").textContent = "Paper!! You Win!!";
    x++;
    document.getElementById("player_scr").innerHTML = x;
  } else if (this.id == "sci" && ran == 2) {
    document.getElementById("result").textContent = "Scissors!! You Win!!";
    x++;
    document.getElementById("player_scr").innerHTML = x;
  } else if (this.id == "rock" && ran == 2) {
    document.getElementById("result").textContent = "Paper!! Computer Wins!!";
    y++;
    document.getElementById("computer_scr").innerHTML = y;
  } else if (this.id == "paper" && ran == 3) {
    document.getElementById("result").textContent =
      "Scissors!! Computer Wins!!";
    y++;
    document.getElementById("computer_scr").innerHTML = y;
  } else if (this.id == "sci" && ran == 1) {
    document.getElementById("result").textContent = "Rock!! Computer Wins!!";
    y++;
    document.getElementById("computer_scr").innerHTML = y;
  } else {
    document.getElementById("result").textContent = "Draw!! Try Again!!";
  }
  if (ran == 1) {
    document.getElementById("computer").src = "rock.png";
  } else if (ran == 2) {
    document.getElementById("computer").src = "paper.png";
  } else if (ran == 3) {
    document.getElementById("computer").src = "scissors.png";
  }

  setTimeout(function () {
    document.getElementById("computer").src = "computer.gif";
    if (x != 10 && y != 10) {
      document.getElementById("result").textContent = "Play Next Round!";
    }
    if (x == 10 && x > y) {
      document.getElementById("result").innerHTML =
        "Game Over! <br>You Wins the Game!!";
      document.getElementById("btn").style.visibility = "visible";
      //   x = 0;
      //   y = 0;
      //   document.getElementById("player_scr").innerHTML = x;
      //   document.getElementById("computer_scr").innerHTML = y;
    } else if (y == 10 && x <= y) {
      document.getElementById("result").innerHTML =
        "Game Over! <br>Better Luck Next Time!!";
      document.getElementById("btn").style.visibility = "visible";
      //   x = 0;
      //   y = 0;
      //   document.getElementById("player_scr").innerHTML = x;
      //   document.getElementById("computer_scr").innerHTML = y;
    }
  }, 2000);
}
