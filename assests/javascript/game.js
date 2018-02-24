$(document).ready(function () {

    // Picks random number to match with
    var randomNumber = Math.floor(Math.random() * 101 + 19)
    console.log(randomNumber);
    // Prints that random number to the correct div
    $('#randomNumber').text(randomNumber);

    // assigns random number to each crytal
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    console.log(num1, num2, num3, num4);
    // variables for score, wins, losses
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var winAudio = new Audio("assests/images/win.mp3");
    var loseAudio = new Audio("assests/images/lose.mp3");

    // function to reset the game
    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19)
        $('#randomNumber').text(randomNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        console.log(randomNumber);
        console.log(num1, num2, num3, num4);
        userScore = 0;
        $('#user').text(userScore);
        $('body').css("background-image", "url(assests/css/sonic.jpg");
        document.getElementById("resetButton").style.visibility = "hidden";
        winAudio.pause();
       
    }
    // this function displays a button once user has won or lost, which when pressed the reset function is activated
    function replay() {
        document.getElementById("resetButton").style.visibility = "visible";
        $('#resetButton').on("click", function () {
            reset()
        })
    }

    // run this function if user wins
    function victory() {
        $('body').css("background-image", "url(assests/css/supersonic.png");
        winAudio.play();
        wins++;
        $(".wins").text("Wins: " + wins);
        replay()

    }

    // run this funtion if user loses
    function defeat() {
        loseAudio.play();
        losses++;
        $(".losses").text("Losses: " + losses);
        replay()
    }
    // these are the click functions for the buttons

    $('.one').on("click", function () {
        userScore = userScore + num1;
        $('#user').text(userScore);
        if (userScore == randomNumber) {
            victory();
        } else if (userScore > randomNumber) {
            defeat();
        }
    })

    $('.two').on("click", function () {
        userScore = userScore + num2;
        $('#user').text(userScore);
        if (userScore == randomNumber) {
            victory();
        } else if (userScore > randomNumber) {
            defeat();
        }
    })

    $('.three').on("click", function () {
        userScore = userScore + num3;
        $('#user').text(userScore);
        if (userScore == randomNumber) {
            victory();
        } else if (userScore > randomNumber) {
            defeat();
        }
    })

    $('.four').on("click", function () {
        userScore = userScore + num4;
        $('#user').text(userScore);
        if (userScore == randomNumber) {
            victory();
        } else if (userScore > randomNumber) {
            defeat();
        }
    })

});