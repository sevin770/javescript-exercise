◆ js 반복문의 용도
1. 코드 여러번 실행할 때 (for)
2. array,object에서 자료를 꺼내쓸 때 (forEach, for in, for of)

◆ 반복문의 종류 

◆ for 반복문
for (var i = 0; i < 3; i++){}

◆ forEach() 반복문 (Array전용)
[1,2,3].forEach();

◆ for in 반복문 (Object전용)
for (var key in 오브젝트){}

◆ for of 반복문 (iterabla 전용)
for (var key of){}


◆ for in 반복문 
: object에 있던 갓을 전부 하나씩 꺼내서 사용할 때
for (var 작명 in 반복할오브젝트){}

var 오브젝트 = {name: 'Kim', age: 30};
for (var key in 오브젝트){  // 작명부분은 key값이 저장된다. 그리고 오브젝트 갯수만큼 돈다. 
    console.log(오브젝트[key]); //오브젝트.key와 같은 뜻
}

1. enumerable한 것만 반복해준다.

var 오브젝트 = {name: 'Kim', age: 30};
여기 오브젝트의 name값에는 kim말고 더 숨겨진 게 있다.
Object.getOwnPropertyDescriptor(오브젝트,'name'); // 오브젝트.name의 숨겨진 정보 출력.
출력해보면 writable, enumerable, configurable 세 가지가 나옴.

여기서 enumerable 은 셀 수 있는지 여부다. 반복문에서 'Kim'을 출력할 거냐라는 거
일반 자료들은 항상 enumerable 이 ture가 기본값.
false로 바꾸고 싶으면 자바스크립트 내장함수를 쓰면 됨.(구글링)

2. 부모의 prototype도 반복해준다.

class 부모 {
}
부모.prototype.name = 'Park';

var 오브젝트 = new 부모();
for (var key in 오브젝트){ 
    console.log(오브젝트[key]);  //park이 출력됨. 
}

부모 prototype까지 반복할 일이 별로 없다. 
내가 직접 가지고 있는 값만 반복시키고 싶다면
* hasOwnProperty()
이걸 쓴 곳에는 true/false 값이 나오기 때문에 if문 안에 써준다. 

var 오브젝트 = new 부모();
for (var key in 오브젝트){ 
    if (오브젝트.hasOwnproperty(key)){
        console.log(오브젝트[key]);  
    }
}

3. Object자료형에만 쓴다. array에는 for,forEach씀.


◆ for of 반복문 
array, 문자, arguments, NodeList, Map, Set 에 사용

var 어레이 = [2,3,4,5];
for(var 작명 of 어레이){
    console.log(자료) // 2,3,4,5가 한줄씩 출력됨. 
}
작명 부분에 들어가는 데이터는 어레이의 하나하나의 자료를 뜻함. 

- 글자 분석도 가능 
for(var 작명 of '가나다라마'){
    console.log(자료) // 가,나,다,라,마 가 한줄씩 출력됨. 
}

- iterable한 자료형에만 사용 가능
array, 문자, arguments, NodeList, Map, Set 

어레이[Symbol.iterator](); 출력하면 Array Iterator{} 출력됨
'dds'[Symbol.iterator](); 출력하면 String Iterator{} 출력됨
내부 데이터 출력을 도와주는 함수 같은 것이다. 
이게 있으면 iterable한 자료형임.

- nodeList가 뭔가? 
document.getElementsByClassName(); 
document. querySelectorAll();
등을 사용하면 상단에 있는 여러가지 elements를 찾을 수 있는데, 
쓰고나면 array와 비슷한 [element1,element2,element3] 이런식으로 자료가 남는데 이걸 nodeList라고 함.
이것도 출력하면 iterator를 가지고 있음.