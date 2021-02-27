let gameSection = document.querySelector("#game-section");

let playerDetails = document.querySelector(".player-details");

let formButton = document.getElementById("button");
let playerName;
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
    playerName = sessionStorage.getItem("playername");

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

let buttons = document.querySelectorAll(".p-controls span");
let imgCont = document.querySelector("#left-player");
let imgContRight = document.querySelector("#right-computer");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let randomPlay = Math.floor(Math.random() * 10);
    console.log(randomPlay);

    player(index);
    // jarvis(randomPlay);

    while (randomPlay > 2) {
      randomPlay = Math.floor(randomPlay / 2);
    }
    // console.log(randomPlay);
    let bigImgRight = document.createElement("img");
    let imagesRight = [
      "../assets/rock-right.png",
      "../assets/paper-right.png",
      "../assets/scissors-right.png",
    ];

    imgContRight.appendChild(bigImgRight);
    bigImgRight.setAttribute("src", imagesRight[randomPlay]);
    bigImgRight.setAttribute("class", "big-img-right");
    bigImgRight.style.animation = "bigimageRight 5s ease";

    bigImgRight.addEventListener("animationend", () => {
      imgContRight.removeChild(bigImgRight);
    });
    console.log(randomPlay);

    if (index === randomPlay) {
      setTimeout(() => {
        alert("you tie");
      }, 5000);
    } else if (
      (index == 0 && randomPlay == 2) ||
      (index == 1 && randomPlay == 0) ||
      (index == 2 && randomPlay == 1)
    ) {
      setTimeout(() => {
        alert("you win");
      }, 5000);
    } else if (
      (index == 0 && randomPlay == 1) ||
      (index == 1 && randomPlay == 2) ||
      (index == 2 && randomPlay == 0)
    ) {
      setTimeout(() => {
        alert("you lose");
      }, 5000);
    }
  });
});

// player functionalities
function player(index) {
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
}
