함수를 만드는 방식

(1)
function 예쁜함수(){
  //어쩌구
}

(2)
var 예쁜함수 = function(){
  //어쩌구
}

(3) arrow function

var 예쁜함수 = () => {
    //어쩌구
  }


◆ arrow function의 장점. 

function(){}이 있는데 왜 이게 생겼나?

함수를 만드는 경우
1.코드들을 기능으로 묶고 싶을 때

2.입출력 기계를 만들고 싶을 때

var 함수 = (a) => {return a+10}
함수(5); // 15출력


장점1) 입출력 기계를 만들 때 보기 쉽다.
장점2) 파라미터가 1개면 소괄호 생략 가능.
장점3) 코드 한 불이면 중괄호도 생략가능 ( 중괄호+return도 생략 가능 )
ex)
var 함수 = a => a+10; 
var 함수 = a => console.log(a);

◆ arrow function의 사용예시

1.forEach 콜백함수

[1,2,3,4].forEach(function(a){
    console.log(a)
});

[1,2,3,4].forEach(a => console.log(a));

2. 이벤트리스너 
arrow function를 쓰면 this뜻이 달라져서 쓰면 안됨.
쓰고 싶으면 this를 쓰지 마셈. e.currentTarget 쓰셈.

document.getElementById('버튼').addEventListener('click', function(e){});

document.getElementById('버튼').addEventListener('click', (e) => {});

◆ arrow function의 특징 : 바깥에 있던 this값을 내부에서 그대로 사용한다.

저렇게 수정할 수 있지만, this 값이 재정의 되지 않기 때문에 
일반 이벤트리스너에서 this == e.currentTarget 여야 하는 것이
arrow function 이벤트 리스너에서 this == 바깥의 this값(window)
이 되어버린다.

3. object 안의 함수

var 오브젝트 = {
    함수 : () => {
        this // 바깥에 있던 this값을 가져오니까 window출력
    }
}

오브젝트.함수()