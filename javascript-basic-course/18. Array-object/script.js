
let tabBtn = document.querySelectorAll(".tab-button");
let content = document.querySelectorAll(".tab-content");

function tabEvent(num) {
  for (let j = 0; j < tabBtn.length; j++) {
    tabBtn[j].classList.remove("orange");
    content[j].classList.remove("show");
  }
  tabBtn[num].classList.add("orange");
  content[num].classList.add("show");
}

document.querySelector(".list").addEventListener("click", function (e) {
  
  console.log(parseInt(e.target.dataset.id));
  tabEvent(parseInt(e.target.dataset.id))

});


//array 자료형 : 순서가 존재함
//[자료1, 자료2...]
var car = ['소나타',50000,'white']; // array 여러 자료를 한 변수 안에 저장
//자료간 정렬 가능, 중간에 자르기도 가능, array에 붙일 수 있는 기본 함수들은 다양하니 필요할 때 찾아서 쓰면 됨.
car.sort(); 
console.log(car);
console.log(car.slice(1,3));

//-----------------------

//object 자료형 : 이름을 붙여서 저장가능한 게 장점. 순서 개념이 없음,
//{이름1:자료1, 이름2:자료2...}  key : 'value' / key는 그냥 자료의 이름일 뿐. 자료는 value만 저장된다.
var car2 = {name: '소나타', price: 50000, color: 'white'};
console.log(car2['name']); // 이름만 쓰면 꺼내쓸 수 있다.
car2.price = 60000; //자료수정

var card = document.querySelectorAll('span');
var productList = {name:'소나타', price: 50000};
card[0].innerHTML = productList['name'] 
// card[1].innerHTML = productList['price'];

//----------------------- 데이터 바인딩.(html에 데이터 넣기). 제이쿼리, 리액트, 뷰등 사용하면 데이터바인딩을 쉽게 해줌.

var car3 = {name:'소나타', price:[50000, 3000, 4000]} //object,array 안에 아무거나 다 넣을 수 있다. object, array도 넣을 수 있음.
card[1].innerHTML;

//복잡한 자료에서 원하는 데이터 꺼내기.
//시작 기호를 본다 {} 중괄호는 오브젝트자료.
card[1].innerHTML = car3.price[1];


//개발방식
//1. sever-side-rendering : 완성된 html파일 전송, 서버가 힘듦.
//2. client-side-rendering : 빈html파일 + 데이터 전송 (js로 html을 작성한다.), 서버가 편함.