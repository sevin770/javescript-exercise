function 기계(){ // 부모
    this.name = 'Kim';
    this.age = 15;
    this.sayHi = function(){
        console.log('안녕하세요' + this.name + '입니다');
    }
}
var 학생1 = new 기계(); // 자식. 기계가 가지고 있는 name,age,sayHi등의 속성을 물려받는다.

◆ constructor를 이용한 이런 기능을 상속이라고 한다.

◆ prototype : 상속을 구현할 수 있는 또 하나의 문법(js에만 있다.)

- prototype : 원형, 유전자
- 기계(constructor)를 만들면 prototype이라는 공간이 자동을 생성됨.
- prototype(부모의 유전자)에 값을 추가하면 모든 자식들이 물려받기 가능.

function 기계(){ // 부모
    this.name = 'Kim';
    this.age = 15;
    this.sayHi = function(){
        console.log('안녕하세요' + this.name + '입니다');
    }
}
기계.prototype.gender = '남' // 프로토타입을 주면
var 학생1 = new 기계(); // 자식들은 .gender를 사용할 수 있게 됨.
console.log(학생1.gender); // '남'출력
console.log(학생1); // 여기엔 gender라는 속성이 나오지 않지만 출력됨.

◆ prototype의 동작원리

오브젝트 자료 출력 순서
학생1.gender
(1)학생1이 직접 gender을 가지고 있는가? -> 있으면 출력, 
없으면
(2)학생1의 부모 유전자(기계.prototype)가 gender를 가지고 있는가? -> 있으면 출력

* 내장함수들은 어떻게 동작할까?
push(),sort(),toString(),map() 등등..

해당 함수를 갖고 있지 않은데 어떻게 사용할 수 있는 건가? 부모의 부모 유전자(prototype)에 저장되어 있기 때문이다.

◆ Array
var arr = [1,2,3];
var arr = new Array(1,2,3); // 실제 array가 만들어지는 방식. array만드는 기계로부터 하나 뽑음.

- arr을 출력해보면 prototype에 부모의 Array가 있다. 
이 부모가 다양한 내장함수들을 가지고 있기 때문에 쓸 수 있는 것. 
Array.prototype을 출력해보면 다양한 기본 array함수들을 내장하고 있다.
모든 array자료형은 Array부모를 이용해서 만든다.

◆ Object (array와 비슷한 원리)
var obj = {name:'kim'}
var obj = new Object(); // 실제 object가 만들어지는 방식. object만드는 기계로부터 하나 뽑음.

