◆ constructor : 오브젝트 생성기계, 생성자, 생성자와 instance문법
object를 마구 복사하고 싶을 때
비슷한 object여러개 만들 때
문자,숫자,함수 등등 다 넣어서 만들 수 있다. 

예시) 학생 출석부를 만들어보자. 
var 학생1 = {name : 'kim', age : 15}

- function은 함수 만들 때도 사용하지만 constructor만들 때도 사용한다.
- 대문자로 작명 (일반 함수와 구분하기 위해)

function 기계(){
    this.name = 'Kim';
    this.age = 15;
}
new 기계(); // new라는 키워드를 사용하면 기계에서 object를 뽑을 수 있다. 

◆ 생성기계를 만들기 위해서 필요한 것
- this
새로 생성되는 object를 뜻한다. 값 부여 가능 instance
this.name : 새로 생성되는 object의 name이 'kim'
this.age : 새로 생성되는 object의 age이 15

var 학생1 = new 기계(); // 학생1이라는 object가 뽑힌다. 

Q.기계로 생성되는 모든 학생 object에 sayHi()함수를 추가하고 싶다면?

function 기계(){
    this.name = 'Kim';
    this.age = 15;
    this.sayHi = function(){
        console.log('안녕하세요' + this.name + '입니다');
    }
}
var 학생1 = new 기계();
학생1.sayHi();

* 그런데 학생1이랑 학생2 이름 나이 다 똑같이 출력된다. 
이걸 다르게 짜려면? 파라미터 사용.

function 기계(이름){
    this.name = 이름; 
    this.age = 15;
    this.sayHi = function(){
        console.log('안녕하세요' + this.name + '입니다');
    }
}
var 학생1 = new 기계('park'); //name이 park으로 출력
var 학생2 = new 기계(); //name이 undefined로 출력

*이름 뿐만 아니라 나이랑 이것저것 파라미터를 늘려서 응용가능.

//----------------------------------------------------------------------------

간단한 연습문제) 
쇼핑몰에 쓸 상품데이터를 오브젝트로 여러개 만들고 싶습니다. 
var product1 = { name : 'shirts', price : 50000 };
var product2 = { name : 'pants', price : 60000 };

Q1. 위처럼 생긴 상품오브젝트들을 뽑아낼 수 있는 constructor를 제작해보세요.
그리고 실제 상품 두개를 뽑아보십시오.

function Item(이름,가격){
    this.name = 이름;
    this.price = 가격;
}
var item1 = new item('shirts','50000');
var item2 = new item('pants','60000');
console.log(item1);
console.log(item2);

Q2. 상품마다 부가세() 라는 내부 함수를 실행하면 콘솔창에 상품가격 * 10% 만큼의 부가세금액이 출력되도록 하고 싶으면
constructor를 어떻게 수정해야할까요?

function Item(이름,가격){
    this.name = 이름;
    this.price = 가격;
    this.부가세 = function(){
        console.log(가격 * 0.1);
    }
}
var item1 = new Item('shirts','50000');
var item2 = new Item('pants','60000');

console.log(item1.부가세());

