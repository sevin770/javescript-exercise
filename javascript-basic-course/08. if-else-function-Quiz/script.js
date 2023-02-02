//네비게이션바
document
  .getElementsByClassName("navbar-toggler")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("list-group")[0].classList.toggle("show");
  });

//class 부착식으로 개발하면 - 애니메이션 추가 쉬움, 나중에 재사용 편리

//모달창 바닐라자바스크립트

// document.querySelector("#open").addEventListener("click", function () {
//   document.querySelector(".black-bg").classList.add("modal-show");
// });

// document.querySelector("#close").addEventListener("click", function () {
//   document.querySelector(".black-bg").classList.remove("modal-show");
// });

//모달창 제이쿼리

$("#open").on("click", function () {
  $(".black-bg").addClass("modal-show");
});
$("#close").on("click", function () {
  $(".black-bg").removeClass("modal-show");
});

//전송버튼 누를 때 input 입력값 공백 시 alert
//폼 전송 막는 함수 e.preventDefault();

document.querySelector(".btn-primary").addEventListener("click", function (e) {
  if (document.querySelector("#name").value == "" && document.querySelector("#password").value == "") {
    alert("아이디와 패스워드를 입력해주세요");
    e.preventDefault();
  } else if (document.querySelector("#name").value == "") {
    alert("아이디를 입력해주세요");
    e.preventDefault();
  } else if (document.querySelector("#password").value == "") {
    alert("패스워드를 입력해주세요");
    e.preventDefault();
  }
});

//input : <input>에 값을 입력했을 때 나타나는 이벤트. change로 써줘도 무방. 
//change : input과 차이점은 <input>에 값을 입력하고 포커스를 잃을 때 발생.
document.querySelector('#name').addEventListener('input', function(){
    console.log('아이디');
});
document.querySelector('#password').addEventListener('change', function(){
    console.log('비밀번호');
});


//if열 안에는 true/false : boolean 으로 해야 잘 작동함
// true(truthy) 인식 : 0제외 숫자, '문자', [], {}
// false 인식(falsy) : 0 , '', null, undefined, NaN
// && , ||
