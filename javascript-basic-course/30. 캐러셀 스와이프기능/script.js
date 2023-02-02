
// 이벤트 
//mousedown : 마우스클릭을 눌렀을 때, 
//mouseup : 마우스클릭을 떼어냈을 때.  -> down과 up을 합친게 click이벤트
//mousemove : 마우스 움직일 때
//e.clientX : 마우스 좌표 출력

  //내가 드래그한 거리만큼 박스도 왼쪽으로 이동.
  //내가 클릭한 위치에서 마우스 위치를 뺀다.

  //클릭을 떼어냈을 때 100px이상 이동했으면 두번째 사진. 아니면 첫번째 사진
  //html의 드래그이벤트 해제하는 법 이미지태그에 draggable = "false"
  //이걸 해제 안하면 클릭했을 때 자꾸 이미지가 끌어진다.
  

var 시작좌표 = 0; //전역변수
var 눌렀냐 = false;

document.querySelectorAll('.slide-box')[0].addEventListener('mousedown', function(e){
  눌렀냐 = true;
  시작좌표 = e.clientX;
});
document.querySelectorAll('.slide-box')[0].addEventListener('mousemove', function(e){
if( 눌렀냐 == true ){
    //console.log(e.clientX - 시작좌표); //시작좌표-e.clientX하면 오른쪽으로 갈 때 음수로 나오니까 위치를 바꿔줌.
    document.querySelector('.slide-container').style.transform = `translateX(${e.clientX - 시작좌표}px)`;
  }

});

document.querySelectorAll('.slide-box')[0].addEventListener('mouseup',function(e){
  눌렀냐 = false;
  if( Math.abs(e.clientX - 시작좌표) > 100){
    document.querySelector(".slide-container").style.transform = 'translateX(-100vw)';
    document.querySelector(".slide-container").style.transition = 'all .5s';
  }
  else {
    document.querySelector(".slide-container").style.transform = 'translateX(0vw)';
    document.querySelector(".slide-container").style.transition = 'all .5s';
  }
  setTimeout(()=>{document.querySelector(".slide-container").style.transition = 'none';},500);
  //transition을 계속 넣어주면 이상해진다.첫번째만 제대로 작동하고 그 다음 버벅거리니까 
  //한 번 이동하면 제거하도록 해야 안 버벅거림.
});


// 모바일 버전도 저장해주려면 mouse를 touch로 바꿔서 추가한다.
// mousedonw -> touchstart
// mouseup -> touchend
// mousemove -> touchmove
// e.clientX -> e.touches[0].clientX; // 손가락을 여러개 가져다 댈 수 있으니까 몇 번째 터치인지 설정
// touchend 에서는  e.changedTouches[0].clientX; 로 작성해야함.


document.querySelectorAll('.slide-box')[0].addEventListener('touchstart', function(e){
  눌렀냐 = true;
  시작좌표 = e.touches[0].clientX;
});
document.querySelectorAll('.slide-box')[0].addEventListener('touchmove', function(e){
if( 눌렀냐 == true ){
    //console.log(e.clientX - 시작좌표); //시작좌표-e.clientX하면 오른쪽으로 갈 때 음수로 나오니까 위치를 바꿔줌.
    document.querySelector('.slide-container').style.transform = `translateX(${e.clientX - 시작좌표}px)`;
  }

});

document.querySelectorAll('.slide-box')[0].addEventListener('touchend',function(e){
  눌렀냐 = false;
  if( Math.abs(e.changedTouches[0].clientX - 시작좌표) > 100){
    document.querySelector(".slide-container").style.transform = 'translateX(-100vw)';
    document.querySelector(".slide-container").style.transition = 'all .5s';
  }
  else {
    document.querySelector(".slide-container").style.transform = 'translateX(0vw)';
    document.querySelector(".slide-container").style.transition = 'all .5s';
  }
  setTimeout(()=>{document.querySelector(".slide-container").style.transition = 'none';},500);
  //transition을 계속 넣어주면 이상해진다.첫번째만 제대로 작동하고 그 다음 버벅거리니까 
  //한 번 이동하면 제거하도록 해야 안 버벅거림.
});



// 답

// let 시작좌표 = 0;
// let 눌렀냐 = false;

// $('.slide-box').eq(0).on('mousedown', function(e){
//   시작좌표 = e.clientX;
//   눌렀냐 = true;
// });

// $('.slide-box').eq(0).on('mousemove', function(e){
//   if (눌렀냐 === true) {
//     $('.slide-container').css('transform', `translateX( ${e.clientX - 시작좌표}px )`)
//   }
// });

// $('.slide-box').eq(0).on('mouseup', function(e){
//   눌렀냐 = false;

//   if (e.clientX - 시작좌표 < -100) {
//     $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)');
//   } else {
//     $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
//   }
//   setTimeout(()=>{
//     $('.slide-container').css('transition', 'none')
//   }, 500)
  
// });


//Hammer.js 같은 걸 이용하면 조금 더 짧고 쉽게 개발 가능
//1.브라우저 호환성 2.이벤트리스너 1개로 통일 3.스와이프,pinch,rotate등 제스쳐 감지하는 이벤트 리스너 제공