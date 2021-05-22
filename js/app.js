let gameSection = document.querySelector("#game-section");
let playerDetails = document.querySelector(".player-details");
let leftPlayer = document.querySelector(".Player-name");
let formButton = document.getElementById("button");
let playerName;
let refresh = document.querySelector(".refresh");

refresh.addEventListener("click", () => {
  location.reload();
});

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
    leftPlayer.textContent = `${playerName}'s points `;
    document.getElementById("username").value = "";
  }
  return playerName;
});

// form validation ends

window.onload = () => {
  playerName = sessionStorage.getItem("playername");
  let game = sessionStorage.getItem("game");
  if (game == "true") {
    gameSection.style.display = "flex";
    form.style.display = "none";
    playerDetails.textContent = `${playerName} VS Jarvis`;
    leftPlayer.textContent = `${playerName}'s points `;
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

let pointGain = 0;
let pointlose = 0;
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let randomPlay = Math.floor(Math.random() * 3);
    console.log(randomPlay);

    player(index);

    let bigImgRight = document.createElement("img");
    let imagesRight = [
      "./assets/rock-right.png",
      "./assets/paper-right.png",
      "./assets/scissors-right.png",
    ];

    imgContRight.appendChild(bigImgRight);
    bigImgRight.setAttribute("src", imagesRight[randomPlay]);
    bigImgRight.setAttribute("class", "big-img-right");
    bigImgRight.style.animation = "bigimageRight 3s ease";

    bigImgRight.addEventListener("animationend", () => {
      imgContRight.removeChild(bigImgRight);
    });
    console.log(randomPlay);

    let dots = document.querySelectorAll("#dots .dot");
    console.log(dots.length);
    let dotsAi = document.querySelectorAll("#dots-ai .dot");

    if (index === randomPlay) {
      setTimeout(() => {
        // alert("you tie");
        let message = `No one scored this round`;
        popupFunction(message);
      }, 3000);
    } else if (
      (index == 0 && randomPlay == 2) ||
      (index == 1 && randomPlay == 0) ||
      (index == 2 && randomPlay == 1)
    ) {
      setTimeout(() => {
        // alert("you gain a point");
        dots[pointGain].classList.add("greenpoint");
        pointGain++;
        if (pointGain == 5) {
          // alert("you won the tournament......");
          let message = `${playerName} won this Tournament by scoring <span class='point'>${pointGain}</span> points`;
          location.reload();
        }
        let message = `${playerName} scored  <span class='point'>${pointGain}</span> point`;
        popupFunction(message);
      }, 3000);
    } else if (
      (index == 0 && randomPlay == 1) ||
      (index == 1 && randomPlay == 2) ||
      (index == 2 && randomPlay == 0)
    ) {
      setTimeout(() => {
        // alert("you lose a point");
        dotsAi[pointlose].classList.add("greenpoint");
        pointlose++;
        if (pointlose == 5) {
          // alert("you lose the tournament......");
          let message = `${playerName} lost this Tournament. Better luck! next time.`;

          popupFunction(message);
          location.reload();
        }
        let message = `${playerName} lost this round`;
        popupFunction(message);
      }, 3000);
    }
  });
});

// player functionalities
function player(index) {
  let bigImg = document.createElement("img");
  let images = [
    "./assets/rock.png",
    "./assets/paper.png",
    "./assets/scissors.png",
  ];

  buttons.forEach((button) => {
    button.style.pointerEvents = "none";
  });

  imgCont.appendChild(bigImg);
  bigImg.setAttribute("src", images[index]);
  bigImg.setAttribute("class", "big-img");
  bigImg.style.animation = "bigimage 3s ease";

  bigImg.addEventListener("animationend", () => {
    imgCont.removeChild(bigImg);
    buttons.forEach((button) => {
      button.style.pointerEvents = "";
    });
  });
}

let popupFunction = (message) => {
  let popup = document.querySelector("#popup");
  let popText = document.querySelector(".poptext");
  let popBtn = document.querySelector(".popbtn");
  popup.classList.add("block");
  popText.innerHTML = `${message}`;
  popBtn.addEventListener("click", () => {
    popup.classList.remove("block");
  });
};
