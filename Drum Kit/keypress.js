
//클릭했을 때 이벤트

var numberButton = document.querySelectorAll(".drum").length;

for(var i =0; i<numberButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    });
}

//키보드 눌렀을 때 이벤트

document.addEventListener("keypress",function(e){
    //console.log(e);  //아무거나 키보드를 눌렀을 때, 콘솔을 보면 키보드 이벤트들이 나온다.

    makeSound(e.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio ("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            Audio.play();
            break;


        default:
            console.log(buttonInnerHTML);
        
    }
}



