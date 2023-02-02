document.querySelector(".slide-1").addEventListener('click',function(){
  document.querySelector(".slide-container").style.transform = 'translateX(0vw)'
});

document.querySelector(".slide-2").addEventListener('click',function(){
  document.querySelector(".slide-container").style.transform = 'translateX(-100vw)'
});

document.querySelector(".slide-3").addEventListener('click',function(){
  document.querySelector(".slide-container").style.transform = 'translateX(-200vw)'
});


// var 지금사진 = 1;

// document.querySelector(".next").addEventListener('click', function(){
//   if( 지금사진 == 1 ){
//     document.querySelector(".slide-container").style.transform = 'translateX(-100vw)'
//     지금사진 += 1;
//   } else if( 지금사진 == 2 ) {
//     document.querySelector(".slide-container").style.transform = 'translateX(-200vw)'
//     지금사진 += 1;
//   } else if( 지금사진 == 3 ) {
//     document.querySelector(".slide-container").style.transform = 'translateX(0vw)'
//   }
//});

var 지금사진 = 0;

document.querySelector(".next").addEventListener('click', function(){
  document.querySelector(".slide-container").style.transform = 'translateX(-' + 지금사진 + '00vw)'
  지금사진 += 1;
});

