웹 브라우저 사용법. 웹브라우저API

n초 후 코드 실행
setTimeout(function(){}, ms);
setTimeout(함수,시간);

setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
}, 1000);

n초마다 코드 실행
setInterval(function(){}, ms);
setInterval(function(){
  console.log('안녕');
}, 1000);

타이머를 삭제하고 싶을 때
var 타이머 = setInterval(함수); - 이렇게 변수 저장 후
clearTimeout(타이머) - 삭제할 때 변수 넣어 줌.  



//5초 이내 구매시 사은품 증정! - 혼자해보기

let count = 5;

  setInterval(function(){
  count--;
  if( count > 0 ){
    document.querySelector('.alert').innerHTML = count + '초 이내 구매시 사은품 증정!';
  } 
  else if( count <= 0 ) {
    document.querySelector('.alert').style.display = 'none';
  }
  }, 1000);

//답 

// html에서 count부분만 span태그로 감쌈. <span id="num">5</span>초 이내 구매시 사은품 증정

// var count = 5;

// setInterval(function(){
//   count -= 1;
//   if (count >= 0){
//     document.querySelector('#num').innerHTML = count;
//   } 
// }, 1000);





