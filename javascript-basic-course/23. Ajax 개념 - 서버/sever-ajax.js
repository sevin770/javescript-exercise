//서버 : 
//데이터 달라고 하면 데이터를 보내주는 프로그램. 유저 데이터 DB에 저장
//서버와 유저는 문자자료만 주고받을 수 있다.

//서버코드 - 요청,응답
//1. 어떤 데이터인지           2. 어떤 방법으로 요청할 건지 기재해야함.
//1. 데이터의 url을 기재 2. 메소드 get,post 둘 중하나 선택해서 요청 

// get : 데이터를 읽을 때.
// post : 데이터 보낼 때 . 유저가 서버에 데이터 보내려면 post요청 사용.

//get요청하는 곳 : 브라우저 주소창
//특정url로 post요청하는 법 : form태그 이용. action="/url경로" method="post"

//get/post요청하면 브라우저 새로고침 됨.
// ajax기능 : 새로고침 없이 get post요청할 수 있다. 
// ex) 상품더보기 기능.

//---------------------------------------------


//ajax로 get요청하는 법

// 제이쿼리
// $.get().done()
$.get('https://codingapple1.github.io/hello.txt').done(function(data){
  console.log(data);
});

//ajax로 post요청하는 법
// $.post('https://codingapple1.github.io/hello.txt',{name:'kim'}).done(function(data){
//   console.log(data);
// });

//ajax 실패시 특정 코드 실행 하고 싶다면?
$.get('https://codingapple1.github.io/hello.txtㅁㄴㅇ').done(function(data){
  console.log(data);
}).fail(function(){
  console.log('실패함');
});

$.get('https://codingapple1.github.io/price.json').done(function(data){
  console.log(data.price);
  console.log(data);
});

//바닐라자바스크립트 fetch . 
//서버와 유저는 문자자료만 주고받을 수 있다. 
//obejct, array보내고 싶으면 json형태로 따옴표를 쳐서 만듦. 원하는 자료만 뽑아오기 힘들다.
//그래서 json파일을 다시 object로 변환해야 함. then(res => res.json())
//제이쿼리 ajax $.get() 얘는 json을 object로 자동변환해줌.

fetch('https://codingapple1.github.io/price.json').then(res => res.json())
.then(data => {console.log(data)})
.catch(error => {console.log(error)});
