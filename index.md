<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>r-p-s</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/icofont/icofont.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/animation.css" />
  </head>
  <body>
    <section id="main">
      <!-- form section-->
      <form id="form" action="">
        <h1>Rock Papper Scissors Game</h1>
        <div class="name">
          <input
            id="username"
            type="text"
            placeholder="Enter your name"
            autocomplete="off"
          />
          <div id="usermsg">*Please enter your name</div>
        </div>
        <button id="button" type="button">play</button>
      </form>

      <div id="game-section">
        <div id="g-sec-top">
          <div class="home top-icon-sec">
            <i class="icofont-home top-icon"></i>
          </div>
          <div class="top-icon-sec player-details"></div>
          <div class="refresh top-icon-sec">
            <i class="icofont-refresh top-icon"></i>
          </div>
        </div>
        <div id="g-sec-middle">
          <div id="left-player"></div>
          <div id="right-computer"></div>
        </div>
        <div id="g-sec-bottom">
          <div class="left-p-c-box bottom-box">
            <div class="flex">
              <span class="Player-name"></span>
              <div id="dots" class="flex">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
            <div class="controls p-controls">
              <span class="p-rock">
                <img src="assets/rock.png" alt="" />
              </span>
              <span class="p-papper">
                <img src="assets/paper.png" alt="" />
              </span>
              <span class="p-scissors">
                <img src="assets/scissors.png" alt="" />
              </span>
            </div>
          </div>
          <div class="right-p-c-box bottom-box flex">
            <span>JARVIS POINTS</span>
            <div id="dots-ai" class="flex">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
      </div>

      <div id="popup">
        <div class="popcont">
          <div class="poptext"></div>
          <div><button class="popbtn">Continue</button></div>
        </div>
      </div>
    </section>
    <script src="js/app.js"></script>
  </body>
</html>
