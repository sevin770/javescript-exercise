
◆ 상속기능을 구현하는 ES6 방법 : class
constructor를 만드는 신문법

class 부모 {
    constructor(){
        this.name = 'kim'
    }
}
var 자식 = new 부모();


-함수를 추가하고 싶다면?

class 부모 {
    constructor(){
        this.name = 'kim'
        this.sayHi = function(){console.log('hello')} //1. 여기에 추가.
    }
    sayHi(){
        console.log('hello') //2. 여기에 쓰면 자식오브젝트에 생성되지 않고 부모prototype에 추가된다. 
    }
}
var 자식 = new 부모();

* 부모.prototype을 출력해주세요.
== 자식.__proto__  
== 부모.prototype 
== Object.getPrototypeOf(자식); 

Q. class 안에 함수 여러개 추가 가능.
부모.prototype.sayHello = function(){} 이런식으로 써도 되고 그냥 직접 저 안에 넣어도 됨.

Q. class의 constructor 안에 파라미터 추가는?
class 부모 {
    constructor(여기에추가){
        this.name = 여기에추가;
    }
    sayHi(){
        console.log('hello') 
    }
}

◆ 이거 왜 쓰나?
object 여러개 만들어 쓰려고 하는 것.
