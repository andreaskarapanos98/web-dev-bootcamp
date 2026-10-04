let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var gameHasStarted = 0;
var level = 0;
var userClicks;
var result;
var levelCounter=0;

function playSound(name) {
    var sound = new Audio('./sounds/'+ name + '.mp3');
    sound.play();
}

function animatePress (currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
    
}

function checkAnswer(currentLevel) {
    var result;
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        result = "Success";
    }else {
        result="Wrong";
    }
    return(result);
}

function gameOver () {
    console.log("You LOST!!!!!!!!");

    var sound = new Audio('./sounds/wrong.mp3');
    sound.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html("Game Over, Press Any Key to Restart");

    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameHasStarted = 0;
}

function nextSequence () {
    level++;
    $("#level-title").html("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColour = buttonColours[randomNumber];
    playSound(randomColour);
    animatePress(randomColour);
    $("#" + randomColour).fadeOut(100).fadeIn(100);
    gamePattern.push(randomColour);
    //return (randomNumber);
}

//We set eventListeners to keyboard
$(document).keydown(function (){
    if(gameHasStarted === 0) {
        gameHasStarted = 1;
        nextSequence();
    }
})


//We set eventListeners to all buttons
$(".btn").click(function () {

var userChosenColour = this.id;

playSound(userChosenColour);
animatePress(userChosenColour);
$("#" + userChosenColour).fadeOut(100).fadeIn(100);

userClickedPattern.push(userChosenColour);

var currentIndex = userClickedPattern.length - 1;

if (checkAnswer(currentIndex) === "Wrong") {
        gameOver();
        return;
    }


if (userClickedPattern.length === gamePattern.length) {

        userClickedPattern = [];

        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
});


