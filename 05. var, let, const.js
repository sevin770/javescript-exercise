var/let/const 변수이름 = 저장할값

var    재선언 o 재할당 o 범위 function
let    재선언 x 재할당 o 범위 { }
const  재선언 x 재할당 x 범위 { }

선언, 할당, 범위, 

◆ 재선언(var만 가능.)
var 이름 = 'kim' 
var 이름 = 'park'
var 나이 = 20;
var 나이 = 30;
이런식으로 재선언 가능.

◆ 재할당()(var,let 가능)

         할당:'kim'자료를 이름에 할당해주세요
    ------------
var 이름 = 'kim'
--------
 선언:이름이라는 변수를 만들어주세요

var 이름 = 'kim';
이름 = 'park';
let 이름 = 'kim';
이름 = 'park';

◆ const는 재할당이 안됨. 하지만 const로 오브젝트를 만들었을 때: 
오브젝트 내부 값 변경해도 에러 안난다. 변수 자체를 재할당한 게 아니라 안에 있는 값을 바꾼 것이기 때문이다.

const 사람 = {이름: 'kim'}
사람.이름 = 'Park'

◆ 수정불가능한 오브젝트를 만들고 싶다면?
Object.freeze(사람);

freeze 코드를 추가하면 값이 바뀌지 않는다. 


◆ 범위

var의 범위는 function

function 함수(){
    var 이름 = 'kim'; //function 안에서만 존재함.
    이름; //kim이라는 값이 나옴
}
이름; //밖에서 쓰면 값이 안 나옴. console.log(이름) 해보면 오류뜸 

let,const의 범위는 { } 중괄호

function 함수(){
    var 이름 = 'kim';
}
if(true){
    let 이름 = 'Park'; // { }안에서만 존재
}
for(let v = 1;){} // 변수v는 for안에서만 존재함
    