- 함수 파라미터 넣을 때 spread operator

function 더하기(a,b,c){
    console.log(a+b+c);
}
더하기(1,2,3);
// 6출력

◆ array내의 모든 데이터를 파라미터로 집어넣고 싶은 경우?
var 어레이 = [10,20,30];

1. 주먹구구식
더하기(어레이[0],어레이[1],어레이[2]);
    
2. 옛날방식 : apply 사용
더하기.apply(undefined, 어레이);

3. 요즘방식 : spread operator 사용
더하기(...어레이); // 더하기(10,20,30); 


◆ apply,call 함수 개념

var person = {
    인사 : function(){
        console.log('안녕')
    }
}
var person2 = {
    name : '손흥민'
}

//위에 인사라는 함수를 person2에도 적용하고 싶을 때? 
person.인사.apply(person2) // person2.인사(); 와 같은 효과. 

-----------------------------------------------------
var person = {
    인사 : function(){
        console.log(this.name + '안녕')
    }
}
var person2 = {
    name : '손흥민'
}

person.인사(); // 출력 결과는 undefined. this.name이 person 안에 없기 때문이다.
person.인사.apply(person2) // 출력 결과는 손흥민안녕. person2에 person.인사를 적용해주세요. apply 

- 그냥 함수를 가져와서 옮겨썼다고 생각하면 됨.

◆ call은 apply와 같은 기능을 한다.

*차이점?
파라미터를 가져와 쓸 때. : person.인사.apply(person2, 파라미터 집어넣는 곳)

person.인사.apply(person2, [1,2]) : 파라미터를 array형태로 집어넣기 가능
person.인사.call(person2, 1,2) 
-----------------------------------------------------


apply : 더하기()함수에 [어레이]내의 데이터를 파라미터로 넣고 싶을 때 쓴다.

더하기.apply(undefined, 어레이);
undefined에 적용하는 건 뭔소리? 비워두면 문제생기니까 걍 아무값이나 집어넣은 것.