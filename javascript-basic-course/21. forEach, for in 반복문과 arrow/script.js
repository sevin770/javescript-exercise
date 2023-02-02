//반복문의 용도
//1. 코드 반복
//2. array,object 데이터 전부 꺼낼 때.


//서버에서 데이터 가져와서 그 갯수만큼 <option> 생성

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

let selcetForm = document.querySelector("#form");
let size = document.querySelectorAll(".form-select");

selcetForm.addEventListener("input", function () {
  var optionVal = document.querySelectorAll("#form")[0].value;
  console.log(optionVal);

  if (optionVal == "셔츠") {
    size[1].classList.remove("form-hide");
    shirts.forEach(function(a){
      size[1].insertAdjacentHTML()
    });
  } else if (optionVal == "바지") {
    size[1].classList.remove("form-hide");
    //array에 붙일 수 있는 foreach반복문
    pants.forEach(function(a, i){  // foreach안의 파라미터는 반복문이 동작하면서 array를 복붙한다.
      //forEach 안에 파라미터 2개 생성 가능 (1)array안의 데이터 (2)0부터 1씩 증가하는 정수
      console.log(a);
      console.log(i);
      size[1].insertAdjacentHTML("beforeend",`<option>${a}</option>`);
    });
  } else {
    size[1].classList.add("form-hide");
  }
});

//오브젝트 자료 갯수만큼 반복문 돌리려면? for in 반복문

var obj = {name: 'kim', age: 20}

for(var key in obj){
  console.log(key);  // key는 변수이름.
  console.log(obj[key]);
}

// function(){} 
// () => {}
// arrow function과 차이점 함수 안의 this뜻이 달라질 수 있다. 

// arrow function 안에서 쓰면 바깥에 있던 this를 그대로 가져다 쓴다.
// 그냥 function을 쓰면 this값이 알맞게 재정의 됨.
// 이벤트리스너를 쓸 때 this 를 e.currentTarget의미로 쓰려면 일반function을 쓴다.
// arrow를 쓰면 바깥에 있던 this를 가져와 쓰기 때문에 같은 의미로 쓸 수 없다. 
