


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


        console.log(this.style.color="white");

        // var audio = new Audio('./sounds/tom-1.mp3');
        // audio.play();
    });
}

