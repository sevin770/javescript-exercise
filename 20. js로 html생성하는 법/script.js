//html를 작성해두는 형식은 확장성이 부족하다.
//js로 html를 생성하게 하는 법.

//1. 조금 복잡하다.
// var a = document.createElement('p');  // p태그 생성.
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a); // 요소 추가

//2. 1번보다 개선된 방법. 불러오는 속도가 조금 더 느린데 별 차이 없음.
//insertAdjacentHTML 문자형 HTML넣어주는 함수. 기존 html태그들 밑에 추가가 된다.
//innerHTML 아예 바꾸고 싶을 때.
//var 템플릿 = '<p class="hi">안녕</p>';
//document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
//제이쿼리 $('#test').append(템플릿);

//------------------------------------

//바지 선택하면 28,30 옵션이 나오도록 하는 법

let selcetForm = document.querySelector("#form");
let size = document.querySelectorAll(".form-select");

selcetForm.addEventListener("input", function () {
  var optionVal = document.querySelectorAll("#form")[0].value;
  console.log(optionVal);

  if (optionVal == "셔츠") {
    size[1].classList.remove("form-hide");
    var shirtSize = `<option>95</option><option>100</option>`; // 엔터를 쓰고 싶으면 ``사용
    document.querySelectorAll(".form-select")[1].innerHTML = '';
    document.querySelectorAll(".form-select")[1].innerHTML = shirtSize;
  } else if (optionVal == "바지") {
    size[1].classList.remove("form-hide");
    var pantsSize = `<option>28</option><option>30</option>`; // 엔터를 쓰고 싶으면 ``사용
    document.querySelectorAll(".form-select")[1].innerHTML = '';
    document.querySelectorAll(".form-select")[1].innerHTML = pantsSize;
  } else {
    size[1].classList.add("form-hide");
  }
});
