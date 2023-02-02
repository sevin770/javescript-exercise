this 키워드의 뜻은 여러개다.

1. window : 기본 함수들 수납공간
그냥 쓰거나 일반 함수안에서 쓰면 {window}가 출력된다. 

-  console.log(this)
-  function 함수(){
        console.log(this);
    }
    함수();


* 자바스크립트 strict mode
'use strict' 를 입력하면 엄격한 모드가 됨.
ex) 
x = 300; 이런식으로 쓰면 에러가 남.
var x = 300; 이렇게 써야함.

그래서 strict mode로 일반함수 내에서 this를 쓰면 undefined 가 출력된다. 

------------------------------------------------------------

2. 오브젝트 내 함수(메소드) 안에서 사용하면 그 함수를 가지고 있는 오브젝트를 뜻한다.  

var 오브젝트 = {
    data : 'kim',
    함수 : function(){
        console.log(this) // 여기서 this는 본인을 포함하고 있는 오브젝트
    }
}

오브젝트.data; // kim출력
오브젝트.함수(); // 함수출력

ex) 아래 this는 출력하면 뭐가 나올까?

var 오브젝트 = {
    data : {
        함수 : function(){
            console.log(this)
        }
    }
}
오브젝트.data.함수();

-> {함수: f} 출력. 오브젝트.data가 출력된다. 최상위 오브젝트가 출력되는게 아니라 this를 포함한 data가 출력되는 것. 

◆ arrow function 특징 ()=>{}
arrow function는 내부의 this값을 변화시키지 않는다.
arrow function으로 쓰면 this값을 함수밖에 있던 것을 그대로 쓴다. 
var 오브젝트 = {
    data : {
        함수 : ()=>{
            console.log(this)
        }
    }
}
오브젝트.data.함수();
위와 같이 하면 오브젝트.data가 나오는 게 아니라 최상위 오브젝트 window가 출력된다.


◆ 오브젝트 안에 함수 넣을 때 신문법
: function 을 지워줘도 된다.

var 오브젝트 = {
    data : {
        함수(){
            console.log(this)
        }
    }
}

- 함수나 변수를 전역공간에서 만들면 -> {window}에 보관한다. global object : 전역변수 보관소
출력할 때 window.함수() 해도 함수()와 똑같다. 
그냥 생성하면 윈도우라는 오브젝트 안에 만든 것과 똑같다. window : {} 

그래서 따져보면 1번뜻과 2번뜻이 똑같다. 
함수가 윈도우 안에 만들어졌으니 그 함수를 가지고 있는 윈도우가 출력되는 것.

결론 ) 
this는 나를 담고 있는 오브젝트를 출력해준다.