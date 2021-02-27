let gameSection = document.querySelector("#game-section");

let playerDetails = document.querySelector(".player-details");

let formButton = document.getElementById("button");

// form validation starts
formButton.addEventListener("click", () => {
  let uname = document.getElementById("username").value;
  let message = document.getElementById("usermsg");
  let form = document.getElementById("form");

  if (uname == "") {
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
    }, 4000);
  } else {
    sessionStorage.setItem("game", "true");
    sessionStorage.setItem("playername", uname);
    let playerName = sessionStorage.getItem("playername");

    form.style.display = "none";
    gameSection.style.display = "flex";
    playerDetails.textContent = `${playerName} VS Jarvis`;
    document.getElementById("username").value = "";
  }
  return playerName;
});

// form validation ends

window.onload = () => {
  let game = sessionStorage.getItem("game");
  if (game == "true") {
    gameSection.style.display = "flex";
    form.style.display = "none";
  }
};

let home = document.querySelector(".home");
home.addEventListener("click", () => {
  form.style.display = "flex";
  gameSection.style.display = "none";
});

let buttons = document.querySelectorAll(".controls span");
let imgCont = document.querySelector("#left-player");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let bigImg = document.createElement("img");
    let images = [
      "../assets/rock.png",
      "../assets/paper.png",
      "../assets/scissors.png",
    ];

    buttons.forEach((button) => {
      button.style.pointerEvents = "none";
    });

    imgCont.appendChild(bigImg);
    bigImg.setAttribute("src", images[index]);
    bigImg.setAttribute("class", "big-img");
    bigImg.style.animation = "bigimage 5s ease";

    bigImg.addEventListener("animationend", () => {
      imgCont.removeChild(bigImg);
      buttons.forEach((button) => {
        button.style.pointerEvents = "";
      });
    });
  });
});
