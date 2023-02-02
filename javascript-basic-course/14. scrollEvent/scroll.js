
'scroll' 왼쪽에 있는 요소가 실행될 때 함수실행. window에 부착

window.addEventListener('scroll', function(){
  console.log(window.scrollY); // window.scrollY 유저가 스크롤바를 얼마나 내렸나 측정 / 가로는 scrollX / 
  window.scrollY == window.pageYOffset
  부트스트랩 라이브러리 쓰고 있으면 스크롤이 스무스하게 움직임.
  원상복구 하고 싶으면 style에서 수정.
  window.scrollTo(0, 100); // x좌표, y좌표 강제로 스크롤 고정 /
  window.scrollBy(0, 100); // 현재 위치부터 강제로 스크롤
});



제이쿼리버전
$(window).on('scroll', function(){
  $(window).scrollTop(100); // 현재 스크롤바 위치 출력 == window.scrollY 하지만 (안에 y좌표 적으면) 이동도 같이 할 수 있음
});



스크롤바를 끝까지 내리면 alert 띄우기
div의 스크롤바 내린 양 + 눈에 보이는 div박스 높이 == div의 실제 높이 
스크롤바 내린 양를 알려면 scrollTop를 쓴다. scrollY는 window에만 붙일 수 있음.

document.querySelector('.textbox').addEventListener('scroll', function(){
  var 스크롤양 = document.querySelector('.textbox').scrollTop; 
  var 스크롤높이 = document.querySelector('.textbox').scrollHeight;
  var 텍스트박스높이 = document.querySelector('.textbox').clientHeight;
  console.log(스크롤양,스크롤높이,텍스트박스높이); 
  //스크롤바를 끝까지 내려도 숫자가 일치하지 않음. div박스의 높이를 더해줘야 같음
});



-스크롤 다룰 때 주의점.
scroll 이벤트리스너 안의 코드는 1초에 60번 이상 실행됨. 컴퓨터에 부담을 줄 수 있어서 많이 쓰면 안됨.
바닥체크도 여러번 중복으로 해줄 수 있음. 


-텍스트박스가 아닌 현재 페이지 끝까지 스크롤 체크는 html 태그의 길이를 찾으면 됨.
document.querySelector('html') == document.documentElement
document.querySelector('html').scrollHeight // 페이지 로드완료시 실행해야 정확함. body태그 끝나기 전에 넣는게 좋다.
document.querySelector('html').clientHeight
document.querySelector('html').scrollTop == window.scrollY

