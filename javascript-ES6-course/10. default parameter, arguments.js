function 더하기(a,b){
    console.log(a+b)
}
더하기(1);

- js는 파라미터가 2개 들어가는 함수인데 1개만 써도 에러가 안난다.

◆ 함수의 default 파라미터

파라미터를 지정하지 않았을 때, default로 설정될 파라미터를 정할 수 있다. 

* b 자리에 아무것도 안 넣었을 때 10을 넣어주세요 라는 default 설정
b값을 아무 것도 넣지 않았을 때만 발동한다.

function 더하기(a,b = 10){ 
    console.log(a+b)
}
더하기(1); // 11출력

* 각종 연산자,함수도 가능
function 더하기(a,b = 2*5){}
function 더하기(a,b = 2*a){}
function 더하기(a,b = 함수()){}

(함수 사용예시)
b자리에 파라미터를 넣지 않았을 때만 임시함수가 실행됨. 

function 임시함수(){
    return 10
}
function 더하기(a,b = 임시함수()){ 
    console.log(a+b)
}
더하기(1); // 11출력

◆ 함수의 arguments : 모든 파라미터를 [] 안에 넣은 변수

- 모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 경우?
function 함수(a,b,c){ 
    console.log(arguments); //arguments가 출력되는데 array처럼 쓸 수 있는 array임. 
    console.log(arguments[0]); // 1출력
    console.log(arguments[1]); // 2출력
    console.log(arguments[2]); // 3출력
}
함수(1,2,3);

- 입력한 파라미터를 전부 콘솔창에 출력해주는 함수?
각각 쓸 수 있겠지만 파라미터가 매우 여러개라면? 확장성이 있는 코드로 작성하려면 arguments 사용해야함.

function 함수(a,b,c){
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
함수(2,3,4); // 2,3,4가 출력된다.

◆ arguments의 단점. (옛날문법임)
특정 파라미터만 콘솔창에 출력하고 싶다면? arguments 를 쪼개고 array다루듯이 해야하는데 귀찮음.

-> REST함수를 쓴다.
