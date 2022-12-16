document.firstElementChild

<html lang=​"en">​<head>​…​</head>​<meta charset=​"UTF-8">​<meta http-equiv=​"X-UA-Compatible" content=​"IE=edge">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​My Website​</title>​<link rel=​"stylesheet" href=​"./​style.css">​<style type=​"text/​css">​…​</style>​</head>​<body cz-shortcut-listen=​"true">​…​</body>​<h1>​Hellow​</h1>​<h1>​Hellow​</h1>​<h1>​Hellow​</h1>​<p>​…​</p>​<input type=​"checkbox">​<label for>​체크박스​</label>​<ul>​<li class=​"list">​…​</li>​<li class=​"list">​…​</li>​<li class=​"list">​…​</li>​</ul>​<!-- Code injected by live-server --><script>​…​</script>​<script src=​"./​script.js">​</script>​</body>​</html>​
document.firstElementChild.lastElementChild.firstElementChild
<h1>​Hellow​</h1>​

var heading = document.firstElementChild.lastElementChild.firstElementChild;
undefined

heading.innerHTML = "goodbye"; // 글자를 바꿈
'goodbye'

heading.style.color = "red"; // 색깔을 바꿈
'red'

document.querySelector("input").click(); //체크박스 선택됨
undefined

document.querySelector("li").innerHTML = "goodlist"; // li글자를 바꿈
'goodlist'

document.getElementsByTagName("li"); // 태그 이름으로 가져오기.
HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByTagName("li")[2].style.color = "purple"; // nth-of-child쓰려면 []인덱스 대괄호 이용.
'purple'

document.getElementsByTagName("li").length; // 배열이 몇 개인지 알려면
3


document.getElementsByClassName("btn")[0].style.color="red"; //클래스 이름으로 가져오기. 항목이 하나만 있더라도 인덱스를 사용해야 지정이 됨. elements 복수형이라서 복수요소 선택

document.getElementById 인덱스 없어도 지정이 됨. id는 고유하기 때문. ​단일요소 선택
document.getElementById("title").innerHTML = "Good Bye";
'Good Bye'


document.querySelector("") 단일요소 선택. 이 안에 요소, 클래스, ID다 넣을 수 있다.
결합도 가능!id, class, element, tag

document.querySelector("h1");
<h1 id=​"title">​Hello​</h1>​
document.querySelector("#title");
<h1 id=​"title">​Hello​</h1>​
document.querySelector(".btn");
<button class=​"btn" style=​":​active color:​red;​">​Click Me​</button>
document.querySelector("li a");
<a href=​"https:​/​/​www.google.com">​Google​</a>​
document.querySelector("li.item"); 
<li class=​"item">​…​</li>​
document.querySelector("#list a");​

하지만 첫번째 항목만 나오니까, 지정해서 선택하려면 querySelectorAll()[인덱스]를 써야함.
document.querySelectorAll("#list .item")[2].style.color = "blue";
'blue'

css변경 시 태그이름을 카멜케이스로 써줘야 한다.(대시도 빼고)
document.querySelector("#title").style.fontSize = "10rem";
'10rem'
document.querySelector("#title").style.padding = "7%";
'7%'
document.querySelector("#title").style.visibility = "hidden";
'hidden'

https://www.w3schools.com/jsref/dom_obj_style.asp dom태그 참고


// css 시트 안에 스타일을 모두 유지하면서 자바 스크립트로만 변경하려면? 

document.querySelector("button").classList;
DOMTokenList ['btn', value: 'btn'] // classlist로 클래스 목록 확인 
document.querySelector("button").classList.add("invisible"); // .add 사용해서 클래스 추가
document.querySelector("button").classList.remove("invisible"); // .remove 클래스 삭제 
document.querySelector("button").classList.toggle("invisible"); // .toggle 클릭시 생겼다 사라졌다



document.querySelector("h1").innerHTML = "good bye";
'good bye'
document.querySelector("h1").innerHTML = "<i>good bye<i>";
'<i>good bye<i>'
document.querySelector("h1").textContent = "good bye";
'good bye'

innerHTML : html코드도 추가할 수 있다. ""안에 있어야함. 자바스크립트 코드가 아니라 문자열이기 때문. 스타일 태그도 마찬가지.
// textContent : 텍스트만 변경 가능


document.querySelector("a").attributes; // attributes현재 사용중인 모든 속성이 나옴.
NamedNodeMap {0: href, href: href, length: 1}

document.querySelector("a").getAttribute("href"); //원하는 속성이름 하면 나옴
'https://www.google.com'

document.querySelector("a").setAttribute("href","https://www.bing.com"); //
setAttribute는 (변경하려는 속성, 어떤 걸로 변경?);



-드럼 키트 만들기 

// document.querySelector("button").addEventListener("click", handleClick);

// addEventListener 타겟에 어떤 이벤트? (특정 이벤트 유형의 처리기를 등록) MDN 에 다양한 이벤트 코드 참조
// 여기서는 click을 쓸 거임. 문자열로 넣어줘야함. (이벤트, 함수실행) 

// function handleClick() {
//     alert("I got clicked");
// }

//이렇게 쓰면 첫번째 버튼만 이벤트가 먹는다.

// document.querySelector("button").addEventListener("click", function(){
//     alert("I got clicked");
// });

$0.addEventListener("click",function(){ console.log("clicked");});

addEventListener (어떤 이벤트? 지정, 실행되는 이벤트)


-계산기



function add(num1,num2){
    return num1 + num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function calculator(num1,num2,operator){
    return operator(num1,num2)
}

debugger; calculator(3,4,multiply); // debugger; 하고 오른쪽에 화살표아래 누르면 뭐가 잘못됐는지 프로세스를 확인가능. 함수 고칠 때 콘솔에서 저렇게 하면 됨.

//
