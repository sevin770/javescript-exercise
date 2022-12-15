//혼자하기

prompt("네 이름은 뭐니?");
prompt("네 짝꿍의 이름은 뭐니?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);



if (loveScore>50){
   alert("두 사람의 사랑 점수는 " + loveScore + " 점! 평균보다 높습니다.");
}
else {
   alert("두 사람의 사랑 점수는 " + loveScore + " 점! 평균보다 낮습니다.");
}




// 답지

// function loveCalculator(){
    
//     var lovePercent = Math.random();
//     lovePercent = lovePercent * 100;
//     lovePercent = Math.floor(lovePercent) + 1;

//     console.log("두 사람의 사랑 지수는 " + lovePercent + " % 입니다" );

// }
// loveCalculator();
