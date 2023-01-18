1. prototype은 함수에만 몰래 생성된다.

2. 내 부모 유전자(부모의 프로토타입)를 검사하고 싶다면 __proto__

function 기계(){ // 부모
    this.name = 'Kim';
    this.age = 15;
}
기계.prototype.gender = '남'
var 학생1 = new 기계(); 
console.log(학생1.__proto__); // 부모의 프로토타입(기계.prototype)이 출력된다. 

3. __proto__ 를 이용해서 부모님 강제등록하기.
(참고)이건 ES5를 이용한 더 쉬운 방법이 있다. 

var 부모 = {name : 'kim'} // 그냥 오브젝트라서 prototype도 없다.
var 자식 = {};

두 관계를 부모자식으로 이어주고 싶다면?
자식.__proto__ = 부모; // 나의 부모 유전자는 얘로 해주세요.
자식.name하면 'kim' 출력됨.

4. 콘솔창에서 알려주는 prototype chain 
학생1을 출력하고 화살표를 펼쳐보면 __proto__ 항목이 있다. 거기서 부모의 protype을 볼 수 있다. object