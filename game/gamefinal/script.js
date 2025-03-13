(function () {
    const startGame = document.querySelector("#startgame");
    const gameControl = document.querySelector("#gamecontrol");
    // const game = document.querySelector("#game");
    const score = document.querySelector("#score");
    const actionArea = document.querySelector("#actions");
    const cueBall = document.querySelector(".cue-ball");
    const ballContainers = document.querySelectorAll(".ball-container");
    const gameMessage = document.querySelector("#game-message");

    // disable cue ball clicks until a player is selected
    cueBall.classList.add("disabled");

    const gameData = {
        players: ["Player 1", "Player 2"],
        score: [0, 0],
        gameEnd: 20
    };

    // points
    const ballValues = {
        red: 1,
        yellow: 2,
        blue: 3,
        green: 4,
        purple: 5,
        orange: 6
    };

    // connect color balls to css animations
    const ballMap = {
        red: "move-red",
        yellow: "move-yellow",
        blue: "move-blue",
        green: "move-green",
        purple: "move-purple",
        orange: "move-orange"
    };

    // score tracking
    function showCurrentScore() {
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: 
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
        ${gameData.score[1]}</strong></p>`;
    }

    // check winner
    function checkWinningCondition() {
        if (gameData.score[gameData.index] >= gameData.gameEnd) {
            // show winner
            gameMessage.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = ''; // remove startbutton after starting game
            gameControl.innerHTML += '<button id="quit">Start a new game?</button>'; 

            document.querySelector("#quit").addEventListener("click", function () {
                location.reload();
            });
        } else {
            // change scoreboard (only if no one has reached 20)
            showCurrentScore();
            setUpTurn(); // update whose turn it is
        }
    }

    // select 
    startGame.addEventListener("click", function () {
        // select first player randomly
        gameData.index = Math.round(Math.random());
        console.log(`First player is: ${gameData.players[gameData.index]}`);

        gameControl.innerHTML = "<h2>The Game Has Started</h2>";
        gameControl.innerHTML += '<button id="quit">Wanna quit?</button>';

        document.querySelector("#quit").addEventListener("click", function () {
            location.reload();
        });

        // go to set up turn function
        setUpTurn();

        // enable cue ball clicking
        cueBall.classList.remove("disabled");
    });

    // display who first player's is
    const playTurnBtn = document.querySelector 
    const playTurnSound = new Audio('sounds/billiard-sound.mp3');

    function setUpTurn() {
        gameMessage.innerHTML = `<p>It's <strong>${gameData.players[gameData.index]}'s</strong> turn!</p>`;
        actionArea.innerHTML = '<button id="playturn">Take the Shot</button>';

        // play sound on clickk
        document.querySelector("#playturn").addEventListener("click", function () {
            playTurnSound.currentTime = 0; 
            playTurnSound.play();
            playTurn(); 
        }); 
    }


    // playing a turn by clicking cue ball
    function playTurn() {
        // select a random ball container
        const randomBallContainer = ballContainers[Math.floor(Math.random() * ballContainers.length)];
        const ball = randomBallContainer.querySelector(".ball"); // what colored ball?
        const color = ball.classList[1]; //get color style from css class list
        const moveClass = ballMap[color]; // get the animation css class list
        const points = ballValues[color];
    
        // remove previous animations
        cueBall.classList.remove(...Object.values(ballMap));
    
        // moving cue ball
        cueBall.classList.add(moveClass);
    
        // wait for cueballl movement animation to finish before fading the ball
        setTimeout(function () {
            // fade the ball to reveal number
            ball.setAttribute("data-faded", "true");
            ball.classList.add("faded");
            
            gameData.score[gameData.index] += points; // adjust score for current player
    
            checkWinningCondition(); // check if 20pts reached
    
            // if game isn't over (20pts reached) switch player
            if (gameData.score[gameData.index] < gameData.gameEnd) {
                gameData.index = gameData.index === 0 ? 1 : 0;
                setTimeout(setUpTurn, 500); // Delay to set up next turn
            }
    
            // restore original ball and cue ball pos, style after 1 second
            setTimeout(function () {
                ball.removeAttribute("data-faded"); // fade style for number
                ball.classList.remove("faded"); //fade style for ball
                cueBall.classList.remove(moveClass); // cue ball position
            }, 1000);
        }, 500); 
    }
    
    showCurrentScore();
})();
