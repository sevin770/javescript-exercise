//array 정렬하는 법.
var array = [7,3,5,2,40];

//-문자정렬 array.sort()
array.sort();
console.log(array);

//-숫자정렬- 숫자 오름차순 정렬
array.sort(function(a,b){
  return a-b 
});
console.log(array); 

//동작 원리 : 1) a,b는 array안의 자료. 2)return 오른쪽 값이 양수면 a를 오른쪽으로, 음수면 b를 오른쪽으로.

//숫자 내림차순 정리는?
array.sort(function(a,b){
  return b-a
});
console.log(array);

//문자 역순 정렬은?
var array2 = ['a','c','b'];
array2.sort(function(a,b){
  if( a < b == true ){
    return -1;
  }
  if( a > b == true) {
    return 1;
  }
});
console.log(array2);


//------------------------------------------------------------------\

// array 자료 원하는 것만 필터하려면? (ex) 6만원 이하 상품만 보여주기 등
// .filter() : 결과는 변수에 저장해서 써야함.
// 원본을 변형시키는 게 아니라 변형된 값을 남겨주기 때문에..
//.sort()는 원본을 변형함.

var array = [7,3,5,2,40];
var newArray = array.filter(function(a){  // a: array안에 있는 자료
  return a < 4
});
console.log(newArray);

//map() : array자료 전부 변형함.
//(ex)글로벌 사이트에서 원화,달러,유로,엔 등 가격 변환에서 사용할 수 있다.

var array2 = [7,3,5,2,40];
var newArray2 = array.map(function(a){  // a: array안에 있는 자료
  return a * 4;
});
console.log(newArray2);


// sort 함수는 원본을 변형시켜버린다.
// 요즘 코드짤 때 원본을 변형시키는건 나중에 힘들어질 수 있어서 
// array/object 자료 조작시엔 원본을 따로 복사해두고 조작하는 경우가 많다.