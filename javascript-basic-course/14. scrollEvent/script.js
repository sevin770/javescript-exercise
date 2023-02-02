
//스크롤바가 내려가면 폰트사이즈가 줄어듦 - 혼자하기
window.addEventListener('scroll',function(){
  var y = window.scrollY;
  console.log(y);
  if( y >= 100 ){
    document.querySelector('.navbar-brand').style.fontSize = '15px';
  } else {
    document.querySelector('.navbar-brand').style.fontSize = '50px';
  }
});

//답
// $(window).on('scroll', function(){
//   if (window.scrollY > 100) {
//     $('.navbar-brand').css('font-size', '20px');
//   }
// });

//스크롤바를 끝까지 내리면 알림창이 뜸 - 혼자하기
document.querySelector('.textbox').addEventListener('scroll',function(){
  var top = document.querySelector('.textbox').scrollTop;
  var height = Math.floor(document.querySelector('.textbox').scrollHeight);
  var box = document.querySelector('.textbox').clientHeight;
  //console.log(top,height,box);
  if( top + box == height ) {
    alert('스크롤 끝');
  }
});

//답
// $('.lorem').on('scroll', function(){
//   var 스크롤양 = document.querySelector('.lorem').scrollTop;
//   var 실제높이 = document.querySelector('.lorem').scrollHeight;
//   var 높이 = document.querySelector('.lorem').clientHeight;
//   if (스크롤양 + 높이 > 실제높이 - 10) {
//     alert('다읽음')
//   }
// });


