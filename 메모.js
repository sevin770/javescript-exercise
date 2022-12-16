
변수이름
문자, 숫자, 달러, _:  숫자가 맨 앞에 올수 없음

prompt
length
slice

var 트위터 = prompt("트위터 글자 수 몇개?");
var 글자수 = 트위터.length
var 글자수140제한 = 트위터.slice(0,140);
alert ("너가 쓴 글자 수는" + 글자수 + " 자 이고, 사용할 수 있는 남은 글자 수는" + (140-글자수) + " 자 이다.");
alert(글자수140제한);


alert(prompt("트위터 글자 수 몇개?").slice(0,140));
-> 한줄 요약
140개 제한된 글자가 나온다.


name1.toUppercase(); 
name2.toLowerCase();
대문자, 소문자로 바꿔주는 코드
하지만 완료된 뒤에 소실되니까 변수에 다시 할당해줘야함

var name = "sevin";
name1 = name1.toUpperCase();
name2 = name2.toLowerCase();


var name3 = prompt("이름이 뭡니까?");
name3 = name3.toUpperCase();

alert("hello" + name3); 대문자로 나온다.


앞부분만 대문자로 나오게 하려면??

1. 나누어 낸 앞 부분만 변수를 줘서 따로 빼낸다.
var firstName = name4.slice(0,1);

2. 그리고 따로 변수를 줘서 또 대문자로 바꿔준다.
var upperCaseFirstChar = firstName.toUpperCase();

3. 나누어 낸 남은 뒷 부분을 변수를 줘서 따로 빼낸다.
var restName = name4.slice(1,name4.length);

4. 결과 변수에 둘이 합친다.
var result = upperCaseFirstChar + restName;

//앞부분만 대문자

var name0 = prompt("이름이 뭡니까?");
var firstChar = name0.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restChar =  name0.slice(1,name0.length);

var fullName = upperCaseFirstChar + restChar;

alert(fullName);




연산자 예제)

 var dogAge = prompt("강아지 나이가 몇 살입니까?");

var humanAge = {(dogAge-2)*4}+21;

alert("사람의 나이로 변환하면 " + humanAge + " 살 입니다." );


플러스 연산자
x++ = x+1
x-- = x-1


var x = 5;
x += 2; // 7

var x = 5
var y = 3
x += y //8

- 반올림/반내림 하는 법
Math.ceil 올림
Math.floor 내림
Math.round 반올림/반내림
// Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,

// Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,

// Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다.

-Math.random()
난수를 생성하는 함수
소수자릿수가 있는 숫자이며 0부터 최대 범위의 난수.

var n = Math.randoom();
n * 6 을 한다면 0~5.999999999999... 범위를 얻음

Math.floor(n*6)을 한다면 0~5 범위

Math.floor(n*6)+1 하면 1~6 범위



if(조건){
    
}
else {

}

= 대입

'==' 연산자를 이용하여 서로 다른 유형의 두 변수의 [값] 비교
'==='는 엄격한 비교를 하는 것으로 알려져 있다 ([값 & 자료형] -> true).

=== 일치하는지 확인할 때 3개
== 같다
!== 같지 않다
> 크다
< 작다
>= 크거나 같다
<= 작거나 같다

&& == AND
|| == OR
! == NOT



var guestList = ["민아", "세빈", "용준", "한빈", "찬미"];
console.log(guestList.length);

[]: 배열, 항목 검색, 데이터 항목을 보유한 배열.

length 배열은 0부터 계산.


include 함수. 존재할 경우 true, 존재하지 않을 경우 false

var guestName = prompt("네 이름은 뭐니?");
guestList.includes(guestName);


if (guestList.includes(guestName)){
   alert("어서오세요.");
} else {
   alert("죄송합니다. 예약 후 다시 오세요.")
}


피즈버즈 게임
var output = []; 빈 배열 만들기
output.push(1); 배열에 넣고 싶은 목록을 push()에 넣는다



while loops 반복문

while(someting is true) {
    //do someting
}

for loops

for(i=0; i<2; i++)

i=0 - 시작점
i<2 - 끝점
i++  변경사항

while로 표현하면 다음과 같다.
var i=0
while(i<2) {
   console.log(i)
   i++;
}

while 과 for의 차이

while : 조건식이 false가 될때 까지 무한 실행 내가 구하고자 하는 값의 조건이 무엇인지 정확히 모를 경우, 유동적인 경우
for : 조건식으로 true,false를 판단, 구하고자 하는 값의 조건이 무엇인지 정확할 경우