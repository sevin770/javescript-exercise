var 사람 = {
    name : 'park',
    age : 30
}

◆ age라는 자료를 꺼내고 싶다면?
- 자료를 꺼내는 법을 만들어서 꺼낸다. (리액트 뷰등이 활성화되면서 유행하는 기술)
- 내년 age를 뽑는 방법.
var 사람 = {
    name : 'park',
    age : 30,
    nextAge(){
        return this.age + 1;
    }
}
사람.nextAge(); //31출력

- 그런데 그냥 사람.age + 1; 하면 되는데 함수를 왜 만듦?
- 함수를 만들어 object데이터를 다루는 이유
1. object 자료가 복잡할 때 편리
2. object 자료를 꺼내거나 수정 시 편리, 실수방지, 관리가능
- 데이터 출력/수정 함수를 만들어 쓰는 이유다.

var 사람 = {
    name : 'park',
    age : 30,
    setAge(나이){
        this.age = 나이;
    }
}
사람.setAge(20);
-오브젝트를 직접 변경하지 않아도 데이터를 수정해주는 함수를 제작
-사람.age = 20; 이렇게 해도 되는데 왜? 안전장치 기능개발 가능.
함수로 만들면 데이터 수정 시 미리 검사가능하기 때문에.
예시) 실수로 문자로 썼다던가 하는 걸 방지하기 위해 if문을 넣어줄 수 있다. 
setAge(나이){
    this.age = parseInt(나이); //parseInt : 문자를 정수로 변환해줌.
}

◆ 더 쉽게 쓸 수 있게 변경하는 법. setter, getter
set,get 키워드를 함수 왼쪽에 써주면 기존에 쓰던 것처럼 쓸 수 있다. 프로퍼티화 시켜줌.

◆ get함수들(get)
-데이터를 꺼내쓰는 함수에 사용
-return이 있어야 한다.

◆ set함수들(setter)
-데이터를 변경하는 함수에 사용
-파라미터가 반드시 1개만 있어야 한다.

var 사람 = {
    name : 'park',
    age : 30,
    get nextAge(){
        return this.age + 1;
    },
    set setAge(나이){
        this.age = 나이;
    }
}
사람.setAge = 20; // 사람.setAge(20);와 같다.
사람.nextAge; // 사람.nextAge(); 와 같다. 소괄호 빼도 됨. get을 썼기 떄문에 쓰면 에러가 남

◆ class에서 사용하는 get/set

class 사람(){
    constructor(){
        this.name = 'Park';
        this.age = 20;
    }
    set setAge(나이){
        this.age = 나이;
    }
    get nextAge(){
        return this.age + 1;
    }
}

var 사람1 = new 사람();

사람1.setAge = 200 // 사람1을 출력해보면 age가 200으로 변경되어 있음.
사람1.nextAge // 21 출력
