//99개의 맥주병을 반복하기


var numberOfBottles = 99;
while( numberOfBottles >= 0 ){
    var bottlesWord="병";
    if ( numberOfBottles === 1 ) {     
        break;
    }
    numberOfBottles--;
    console.log(numberOfBottles + "" + bottlesWord + "맥주가 있다.");
}