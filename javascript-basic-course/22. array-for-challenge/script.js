
// Q. Array에서 철수라는 자료를 찾고 싶습니다

// array에서 이름을 찾아주는 함수를 만들고 있습니다.
// 함수 안에 파라미터로 이름을 집어넣으면
// 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다. 

var Attendance = ['흥민', '영희', '영희', '철수'];

// function search(name){
  
//   Attendance.forEach((data)=>{
//     if(data == name) {
//        console.log('있어요');
//        return;
//     } else {
//     }
//   });
// }
// search('영희');

//foreach는 return을 쓸 수 없다. 그래서 브레이크가 먹지 않아서 영희가 두 번 나오면 있어요가 두 번 출력됨.


function search(name){
  
  for( let i=0; i<Attendance.length; i++){
    if(Attendance[i] == name){
      console.log('있어요');
      return;
    }
    else {
    }
  }
}
search('영희');

//--------------------------------------------------------------------------------

// Q. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.

// 철수는 구구단을 외우지 못하는 관계로
// 자바스크립트를 이용해 구구단을 2단부터 9단까지 콘솔창에 출력하고 싶어졌습니다.


// for(let a=2; a<=9; a++){
//   for(let b=1; b<=9; b++) {
//     let multiply = a*b;
//     console.log(multiply);
//   }
// }

//--------------------------------------------------------------------------------

// Q. 평균점수 계산기 만들기 

// 어떤 함수에 기존 모의고사 성적들을 array 자료에 전부 담아 첫 파라미터로 입력하고 
// 이번 11월 모의고사 성적을 둘 째 파라미터로 입력하면  
// 11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주고 싶습니다. 
// 어떻게 함수를 만들면 될까요?


// function result(array,score){
//   var add = array.reduce((a,b) => {return a+b});
//   var total = add / array.length;
//   console.log(total);
  
//   if( total < score ) {
//     console.log(`평균보다 ${score-total} 점 올랐다`);
//   } 
//   else if ( total > score) {
//     console.log(`평균보다 ${total-score} 점 떨어졌다`);
//   }
//   else {
//     console.log(`${total-score} 점이 유지됐다`);
//   }
// }
// result([10,20,30,40,50],40);


//답

// function 함수(arr,b) {
//   var result = 0;

//   for(let i = 0; i < arr.legnth; i++){
//     result = result + arr[i];
//   }
//   if (result/arr.length < b) {
//     console.log('올랐네요');
//   } else {
//     console.log('같거나 떨어졌네요 재수추천')
//   }
// }
// 함수([2,3,4], 10);
