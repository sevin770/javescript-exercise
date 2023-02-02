◆ extends 
부모class와 유사한 class를 하나 더 복사하고 싶을 때 씀
class상속
그냥 class하나 더 하드코딩 하면 되지 않나? 복사/상속할 값이 많으면 힘드니까

class 할아버지 {
    constructor(name){
        this.성 = 'Kim'
        this.이름 = name;
    }
}
var 할아버지1 = new 할아버지('만덕');
console.log(할아버지1); // class에 입력한 오브젝트가 출력됨.

//위 class를 복사하는 법---------------------------------------------------------

◆ extends

class 아버지 extends 할아버지 {
    constructor(name){
        this.이름 = name; // 이렇게 쓰면 안됨 밑에 super가 필요
        this.나이 = 50; // 새로운 속성도 부여 가능.
    }
}

◆ super 

* extends해서 만든 class는 this를 그냥은 못쓴다. super()다음에 써야함. 
- super(); 는 부모의 내용물, 
this.성 = 'Kim', this.이름 = name;
를 그대로 가져다 넣는 것과 같다. 
- 부모가 썼던 파라미터도 똑같이 넣어주면 됨. 파라미터가 2개 이상이면? 2개 이상 쓰면 됨.

class 아버지 extends 할아버지 {
    constructor(name){
        super(name); // 부모의 constructor
        this.나이 = 50; // 새로운 속성도 부여 가능.
    }
}
var 아버지1 = new 아버지('만수'); // 할아버지와 똑같은 정보에 나이만 추가되서 나옴. 

◆ super의 또 다른 용도

- 할아버지의 프로토타입에 함수 추가

class 할아버지 {
    constructor(name){
        this.성 = 'Kim'
        this.이름 = name;
    }
    sayHi(){
        console.log('안녕 저는 할아버지예요')
    }
}
- 아버지에서 가져다 쓸 수 있음.
아버지1.sayHi // 안녕 저는 할아버지예요 출력 됨
- 아버지class와 할아버지class 둘다 sayHi()함수를 추가한다면?
아버지1.sayHi // 나랑 더 가까운 프로토타입을 출력. 아버지class를 출력함.

- 하지만 아버지에 super.sayHi();를 입력하면 아버지class와 할아버지class를 같이 출력한다.
super();        :부모 class의 constructor 의미
super.sayHi();  :부모 class의 prototype을 의미

class 아버지 extends 할아버지 {
    constructor(name){
        super(name); // 부모 class의 constructor 의미
        this.나이 = 50; 
    }
    sayHi(){
        console.log('저는 아버지예요')
        super.sayHi(); // 부모 class의 prototype을 의미, 아버지sayhi와 할아버지의 sayHI의 안녕이 차례대로 출력됨. 
    }
}