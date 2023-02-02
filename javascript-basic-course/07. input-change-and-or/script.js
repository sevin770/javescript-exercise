//369게임 - 혼자해보기
// function game(num){
//   if( num % 3 == 0 ){
//     if( num % 9 == 0 ) {
//       console.log('박수x2');
//     } else {
//       console.log('박수');
//     }
//   }
//   else if( num % 3 !== 0 ) {
//     console.log('통과');
//   }
// }
// game(18);


//답
// function game(num){
//   if( num % 9 == 0 ){
//     console.log('박수x2');
//   }
//   else if( num % 3 == 0 ) {
//     console.log('박수');
//   }
//   else {
//     console.log('통과');
//   }
// }
// game(3);


//응용해보기 - 끝자리 숫자 3,6,9 일때 박수
function game(num){
  const lastNum = String(num).slice(-1);
  if( num % 9 == 0 || num % 6 == 0 || num % 3 == 0){
    console.log('박수');
  }
  else { 
    console.log(num);
  }
}
game(167);


//---------------------------------------------------------

//시험접수 합불합 - 혼자해보기
// function testPass(aTest, bTest){
//   if( aTest + bTest >= 120 ){
//     if(aTest > 40 && bTest > 40){
//       console.log('합격');
//     } else {
//       console.log('불합격');
//     }
//   } else {
//     console.log('불합격');
//   }
// }
// testPass(50,50);

// 답
// function test(a,b){
//   if( a < 40 || b < 40 ){
//     console.log('불합격');
//   } 
//   else if ( a + b >= 120 ) {
//     console.log('합격');
//   }
//   else {
//     console.log('불합격');
//   }
// }
// test(60,60);