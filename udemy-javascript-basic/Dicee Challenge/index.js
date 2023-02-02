//혼자하기

function Dicegame(){
    
    var numberArray = [0,1,2,3,4,5];

    console.log(numberArray);

    var landomNumber = Math.floor(Math.random() * numberArray.length)+1;
    var landomNumber2 = Math.floor(Math.random() * numberArray.length)+1;


    console.log(landomNumber); 
    console.log(landomNumber2); 

    if(landomNumber>0){
        document.querySelector(".img1").setAttribute("src","./images/dice"+landomNumber+".png");
    }
    if(landomNumber2>0){
        document.querySelector(".img2").setAttribute("src","./images/dice"+landomNumber2+".png");
    }

    if (landomNumber>landomNumber2){
        document.querySelector(".dice1 span").setAttribute("class","bictory");
        document.querySelector("h1").innerHTML = "Play 1 Wins";

    }
    else if(landomNumber<landomNumber2){
        document.querySelector(".dice2 span").setAttribute("class","bictory");
        document.querySelector("h1").innerHTML = "Play 2 Wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

   return;
    
}
Dicegame();


//답지

// var randomNumber1 = Math.floor(Math.random()*6)+1; //1~6

// var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png ~ dice6.png

// var randomImageSource1 = "./images/" + randomDiceImage1; // images/dice1.png ~ images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource1);




// var randomNumber2 = Math.floor(Math.random()*6)+1;

// var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 

// var randomImageSource2 = "./images/" + randomDiceImage2 // images/dice1.png ~ images/dice6.png

// var image2 = document.querySelectorAll("img")[1];

// image2.setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Play 1 Wins";
// }
// else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Play 2 Wins";
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw!";
// }