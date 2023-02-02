3. constructor 문법에서의 this

오브젝트를 반복적으로 여러개 만들고 싶을 때. 오브젝트 생성기계

function 기계(){
    this.이름 = 'kim'
}

여기서 this는 새로 생성되는 오브젝트 (instance)

◆ 기계에서 오브젝트 생산하는 법 : (뒤에서 자세히 배울 것임)

function 기계(){
    this.이름 = 'kim'
}
var 오브젝트 = new 기계();

// 기계{이름: "kim"} 이 출력된다. 

4. 이벤트리스너 안에서의 this는 e.currentTarget

document.getElementById('버튼').addEventListener('click', 
function(){
    console.log(this);
    console.log(e.currentTarget); 
});

e.currentTarget (지금 이벤트 동작하는 곳) 의미로 쓴다.
document.getElementById('버튼') = this = e.currentTarget


◆ 콜백함수 : 함수 안에 들어가는 함수를 뜻한다. 순차적으로 실행하고 싶을 때 사용한다. 

document.getElementById('버튼').addEventListener('click', 
    function(e){
        var 어레이 = [1,2,3];
        어레이.forEach(function(a){ // 이게 콜백함수
            console.log(this); // 여기서 this는 무슨 뜻일까? 출력하면 window가 나온다.
        });
    });

- 일반 함수에서 쓴 this는 window. 이 함수를 담고 있는 오브젝트가 window니까.


◆ 오브젝트 내에서 콜백함수를 쓴다면 this는?

var 오브젝트 = {
    이름들 : ['김','이','박'],
    함수 : function(){
        console.log(this); //여기서 this는 오브젝트가 출력됨. 위 함수를 소유한 오브젝트
        오브젝트.이름들.forEach(function(){
            console.log(this); // 여기서 this는 window 출력 됨.근본없는 일반함수에서 출력하면 window가 출력된다.
        });
    }
}

◆ arrow function으로 바꾼다면?
arrow function는 내부의 this값을 변화시키지 않는다. 외부 this값 그대로 재사용 가능
그래서 위에 있던 this를 똑같이 쓰기 때문에 foreach에 있는 this값은 window가 아니라 오브젝트를 뜻하게 된다.  

var 오브젝트 = {
    이름들 : ['김','이','박'],
    함수 : ()=>{
        console.log(this); //this는 오브젝트가 출력됨.
        오브젝트.이름들.forEach(function(){
            console.log(this); // 재설정되지 않기 때문에 위와 똑같이 오브젝트가 출력됨.
        });
    }
}

이게 없을 떈 bind(this),call() 등등을 썼는데 이제 arrow function으로 처리가 가능하다. 