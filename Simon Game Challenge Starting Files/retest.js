

var colors = ["red","blue","green", "yellow"];
var gamePattern = [];
var userClickPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        started = true;
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});

function nextSequence(){
    level++;
    userClickPattern = [];
    $("#level-title").text("Level " + level);
    
    var randomNum = Math.floor(Math.random()*4);
    var randomColor = colors[randomNum];
    gamePattern.push(randomColor);

    console.log(gamePattern);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    sounds(randomColor);

}


function ckeckAnswer(e){
    if(gamePattern[e]===userClickPattern[e]){
        if(gamePattern.length===userClickPattern.length) {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
      sounds("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


$(".btn").click(function(){

    var userColor = $(this).attr("id");
    userClickPattern.push(userColor);
    keypressAni(userColor);
    sounds(userColor);
    ckeckAnswer(userClickPattern.length-1);
});

function keypressAni(e){
    $("#" + e).addClass("pressed");
    setTimeout(function(){
        $("#" + e).removeClass("pressed");
    },100);
}
function sounds(e){
    var audio = new Audio("./sounds/" + e + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }