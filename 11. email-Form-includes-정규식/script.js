// includes() 로 문자검사 가능
// 'abc'.includes('ab'); -> true 출력

//하지만 더 세부적으로 검사하려면 정규식을 써야한다.

// - 정규식 : 문자를 검사할 수 있는 식 /a/
// /a/.test('abcde'); -> a라는 문자가 안에 있는지 검사. true출력.
// /[a-z]/.test('abcde'); -> 범위 설정이 가능하다. a-z 중 아무 글자나 있는지 확인.

// [a-z], [A-Z], [a-zA-Z] : 영문 검사
// [ㄱ-ㅎ], [ㅏ-ㅣ], [ㄱ-ㅎ가-힣] : 한글 검사
// [0-9] : 숫자 검사
// /\S/ : 아무 문자 1 글자 (특수기호도 포함)
// /^a/ : 글자가 a로 시작하는지
// /a$/ : 글자가 a로 끝나는지
// /(a|b)/ : a or b가 있는지 (괄호도 쓸 수 있음.)
// \. : .은 특별한 정규식 문법이라 .이라는 특수기호가 있는지 확인하려면 \. 로 써줘야 함.
// + : 왼쪽 문자 반복 검색. 글자 1개가 아니라 여러개 찾고 싶으면 \S+ 

// 이메일 정규식
// /\S+@\S+\.\S+/.test('aaa@bbb,ccc')



document.querySelector("form").addEventListener("submit", function(e){
  var inputName = document.querySelector("#name").value;

  if(/\S+@+\S+\.\S+/.test(inputName)){
    alert("이메일 형식임.");
    e.preventDefault();
  } else {
    alert("이메일 형식이 아님.");
    e.preventDefault();
  }

  var inputPw = document.querySelector("#password").value;

  if(/[A-Z]/.test(inputPw)==false){
    alert('비밀번호에 대문자가 없습니다.');
    e.preventDefault();
  }
});



// 비밀번호에 대문자가 있는지 없는지 답

// $('form').on('submit',function(e){

//   var 비번 = document.getElementById('pw').value;
//   if ( /[A-Z]/.test(비번) == false ){
//     alert('대문자없는데요')
//   }

// });
