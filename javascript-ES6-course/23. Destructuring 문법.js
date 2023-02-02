◆ Destructuring 문법

var arr = [2,3,4];
-array 데이터를 전부 변수에 담으려면?
var a = arr[0];
var b = arr[1];이런 식으로 넣어주면 되는데 귀찮.

var [a,b,c] = [2,3,4]; 
var [a,b,c] = arr;
각각 대입된다. a=2, b=3, c=4
변수명을 넣어도 똑같다. 
모양만 맞춰 변수를 선언하면 변수가 생긴다.
직관적으로 변수를 만들 수 있다. 

-array destructuring 할 때 몇개 빼먹는다면?
var [a,b,c] = [2,3]; 
등호로 기본값 지정 가능 
var [a,b,c = 10] = [2,3]; // c는 10으로 출력된다. 

-변수 선언만 하면 undefined 출력
- var [a,b,c = 10] = []; //a와b는 undefined,  c는 10출력 

◆ object 데이터를 꺼내 변수에 담으려면?

var obj = { name : 'Kim', age : 30};
var name = obj.name;
var age = obj.age;
원래 이렇게 했는데 
destructuring 문법쓰면

var {name,age} = { name : 'Kim', age : 30};

◆ object destructuring
- 변수명을 key명과 똑같이 써야 한다. 위치를 맞춰주는 게 아니라 이름을 맞춰주는 거임. 

- 디폴트값 지정 가능
var {name,age = 31} = { name : 'Kim', age : 30};

- 변수명을 바꾸고 싶다면?
var {name : 나이,age} = { name : 'Kim', age : 30}; 
name이 나이라는 변수로 변경됨. 'kim' 출력됨

-변수명도 바꾸고 디폴트값도 주고 싶다면?
var {name : 나이 = 'Park'} = {}; // 나이 출력하면 park출력

-반대로 변수들을 object에 집어 넣고 싶다면?
var name = 'Kim';
var age = 30;

var obj = { name : name, age : age }; //이런 구조가 매우 흔함. name이름을 가진 속성에 'kim'이들어간 name을 넣어달라는 뜻
ES6에는 이걸 축약할 수 있는 문법이 있다. 
var obj = {name, age}; 
key값과 value값이 똑같다면 그냥 쓰면 됨.

◆ 함수파라미터를 만드는 destructuring문법

-object데이터들을 파라미터로 만들고 싶은 경우

var obj = { name : 'Kim', age : 30 };
function 함수({name,age}){ //name,age라는 이름의 파라미터 변수를 입력 가능하다.
    console.log(파라미터);
}
함수({ name : 'Kim', age : 30 }); // 파라미터는 변수와 같다. 파라미터 변수 {name,age}에 각각 이걸 대입해주세요 라는 뜻과 같음.
//'kim', 30출력

-array도 똑같다
function 함수([name,age]){
    console.log(파라미터);
}
함수([1,2]); // 1,2출력


(예제1)
var [number, address] = [ 30, 'seoul' ];
var {address : a , number = 20 } = { address, number };

a와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까요? 

a 는 seoul
address는 seoul
number 30

(예제2) 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다.

let 신체정보 = {
    body: {
      height: 190,
      weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
  };

  let 신체정보 = {
    body: {
      height,
      weight
    },
    size: [상의, 하의],
  } = 신체정보;
