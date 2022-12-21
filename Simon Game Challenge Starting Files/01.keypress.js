


var colors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

$('.btn').click(function(){

 var userChoseColor = $(this).attr("id");
 userClickedPattern.push(userChoseColor);
//console.log(userClickedPattern);

playSound(userChoseColor);
animatePress(userChoseColor);

});


function result(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = colors[randomNumber];
    gamePattern.push(randomColor);

    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
    
}    

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
}


function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3" );
    audio.play();
}
