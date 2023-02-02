


//모든 버튼에 이벤트를 넣으려면?

//혼자하기
// function allButtonPlay(n){

// for(var n=0; n<7; n++){

//         document.querySelectorAll("button")[n].addEventListener("click",function(){
//             alert("I got clicked");
//             console.log(n);
//         });
//     }
//     return;

// }
// allButtonPlay();


//답지

// var numberOfDrumButton = document.querySelectorAll(".drum").length;

// for( var i =0; i<numberOfDrumButton; i++){

//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         alert("I got clicked");
//     });
// }


//경고창 대신 드럼소리가 대신하게 사운드 넣기


var numberButton = document.querySelectorAll(".drum").length;

for(var i =0; i<numberButton; i++){


    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        //switch

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
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
                break;
        }





        //console.log(this.style.color="white");

        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play();
    });
}

