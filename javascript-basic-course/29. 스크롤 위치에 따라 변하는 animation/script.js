
window.addEventListener('scroll',function(){
    var height = window.scrollY;
    console.log(height);

    if( height < 620 ){
        return;
    }
    else {
    //920~1440까지 내리면 첫번째 카드의 투명도를 1-0 서서히 변경
    var y = (-1/520) * height + (144/52);

    document.querySelectorAll('.card-box')[0].style.opacity = y; //변수. 1-0서서히 변하는 투명도

    // y = ax + b; // 1차 함수
    // 1 = a * 920 + b;
    // 0 = a * 1440 + b;
    // a = -1/520;
    // b = 144/52;

    var s = (-2/5200) * height + (64.4/52);
    document.querySelectorAll('.card-box')[0].style.transform = 'scale('+ s + ')';  // 변수 (1에서 0.8정도 까지 작아짐.)
    }

});


//답

//투명도
//   $(window).scroll(function(){

//     var 높이 = $(window).scrollTop();
//     console.log(높이);
  
//     var y =  -1/500 * 높이 + 115/50;
//     $('.card-box').eq(0).css('opacity', y);
  
//   });

//크기

//   $(window).scroll(function(){

//     var 높이 = $(window).scrollTop();
//     console.log(높이);
  
//     var y =  -1/500 * 높이 + 115/50;
//     $('.card-box').eq(0).css('opacity', y);
  
//     var z = (-1/5000) * 높이 + 565/500;
//     $('.card-box').eq(0).css('transform', `scale( ${z} )`);
  
//   });