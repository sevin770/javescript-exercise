prototype function 기계(){} 이건 옛날방식임.

◆ 상속기능을 구현하는 ES5 방법 : 
object.create(프로토타입object); 

부모가 가진 name,age를 그대로 물려받은 자식 object를 만드는 방법
1. constructor 함수 만들기
2. Object.cerate 이용하기

◆ Object.cerate 이용하기

var 부모 = { name : 'kim', age: 50 }
var 자식 = Object.create(부모); // prototype을 부모로 해주세요라는 뜻.

console.log(자식); // {} 빈 오브젝트가 출력 됨. 프로토타입 정의만 했기 때문에.
console.log(자식.name); // 'kim' 출력. 프로토타입을 부모로 두고 있기 때문이다.
console.log(자식.age); // 50 출력.

- 자식의 값을 바꾸고 싶다면? 그냥 직관적으로 바꾸면 됨.
자식.age = 20; 
console.log(자식.age); // 20 출력. 직접 갖고 있나 먼저 확인하고 없으면 부모로 넘어가는 것이기 때문에.

- 손자를 만든다면?
var 손자 = Object.create(자식);
console.log(손자); // {} 빈 오브젝트가 출력.
console.log(손자.name); // 'kim' 출력.
console.log(손자.age); // 20 출력. 자식의 값이 20이기때문에. 자식이 값이 없으면 부모로 올라감.

◆ __proto__

console.log(손자); 
콘솔 출력시에 __proto__확인 가능. 
부모의 프로토타입을 보여줌.

object의 최종 부모는 object
new Object(); //모든 object자료형은 이렇게 만들어 진다. 