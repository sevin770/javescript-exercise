//혼자해보기

//응용1. 나머지 이미지도 적용
//응용2. 1번 슬라이드 왼쪽으로는 움직이지 않도록 설정.


let startSpot = 0;
let oneClick = false; 

let slideBox = document.querySelectorAll('.slide-box');
let slideContainer = document.querySelector('.slide-container');

for( let i = 0; i < slideBox.length; i++) {
    slideBox[i].addEventListener('mousedown',function(e){
        if( i == 0 ){
            startSpot = e.clientX;
            oneClick = true;
        }
        else {
            startSpot = e.clientX+(window.innerWidth*i);
            oneClick = true;

        }
    });
    slideBox[i].addEventListener('mousemove',function(e){
        if( oneClick==true && i==0 ){
            e.clientX - startSpot < 0 ? 
            slideContainer.style.transform = `translateX(${e.clientX - startSpot}px)` 
            : slideContainer.style.transform = `translateX(0vw)`      
        } 
        else if( oneClick==true && i==slideBox.length-1 ){
            Math.abs(e.clientX - startSpot) > (window.innerWidth*i) ? 
            slideContainer.style.transform = `translateX(-${slideBox.length-1}00vw)`
            : slideContainer.style.transform = `translateX(${e.clientX - startSpot}px)`  
        }  
        else if ( oneClick==true ){
            slideContainer.style.transform = `translateX(${e.clientX - startSpot}px)`;    
        } 
    });
    slideBox[i].addEventListener('mouseup',function(e){
        oneClick = false;
        if( i == 0 ){
            if( e.clientX - startSpot < -100 ){
                slideContainer.style.transform = `translateX(-${i+1}00vw)` 
                document.querySelector(".slide-container").style.transition = 'all .5s';
                console.log(e.clientX - startSpot);
            } else {
                slideContainer.style.transform = `translateX(-${i}00vw)`
            }
        } else if ( i == slideBox.length-1){
            if( e.clientX - (startSpot-(window.innerWidth*i)) > 100 ){
                slideContainer.style.transform = `translateX(-${i-1}00vw)` 
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else { 
                slideContainer.style.transform = `translateX(-${i}00vw)`
            }
        }
        else {
            if( e.clientX - (startSpot-(window.innerWidth*i)) > 100 ){
                slideContainer.style.transform = `translateX(-${i-1}00vw)` 
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else if( e.clientX - (startSpot-(window.innerWidth*i)) < -100) {
                slideContainer.style.transform = `translateX(-${i+1}00vw)`
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else { 
                slideContainer.style.transform = `translateX(-${i}00vw)`
            }
        }    
    setTimeout(()=>{document.querySelector(".slide-container").style.transition = 'none';},500);
    });
}



// 두번째 슬라이드에서 자꾸 첫번째 슬라이드로 이동되는 문제가 발생.
// 해결 : container박스가 2번째 슬라이드로 넘어가면 width가 첫번째슬라이드 넓이 만큼 길어지기 때문에 
// e.clientX에 첫번째 이미지만큼 더해줘야 한다. 3번째 슬라이드도 마찬가지.



//터치 추가

for( let i = 0; i < slideBox.length; i++) {
    slideBox[i].addEventListener('touchstart',function(e){
        if( i == 0 ){
            startSpot = e.touches[0].clientX;
            oneClick = true;
        }
        else {
            startSpot = e.touches[0].clientX+(window.innerWidth*i);
            oneClick = true;
        }
    });
    slideBox[i].addEventListener('touchmove',function(e){
        if( oneClick==true && i==0 ){
            e.touches[0].clientX - startSpot < 0 ? 
            slideContainer.style.transform = `translateX(${e.touches[0].clientX - startSpot}px)` 
            : slideContainer.style.transform = `translateX(0vw)`      
        } 
        else if( oneClick==true && i==slideBox.length-1 ){
            Math.abs(e.touches[0].clientX - startSpot) > (window.innerWidth*i) ? 
            slideContainer.style.transform = `translateX(-${slideBox.length-1}00vw)`
            : slideContainer.style.transform = `translateX(${e.touches[0].clientX - startSpot}px)`  
        }  
        else if ( oneClick==true ){
            slideContainer.style.transform = `translateX(${e.touches[0].clientX - startSpot}px)`;    
        } 
    });
    slideBox[i].addEventListener('touchend',function(e){
        oneClick = false;
        if( i == 0 ){
            if( e.changedTouches[0].clientX - startSpot < -100 ){
                slideContainer.style.transform = `translateX(-${i+1}00vw)` 
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else {
                slideContainer.style.transform = `translateX(-${i}00vw)`
            }
        } else if ( i == slideBox.length-1){
            if( e.changedTouches[0].clientX - (startSpot-(window.innerWidth*i)) > 100 ){
                slideContainer.style.transform = `translateX(-${i-1}00vw)` 
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else { 
                slideContainer.style.transform = `translateX(-${i}00vw)`
            }
        }
        else {
            if( e.changedTouches[0].clientX - (startSpot-(window.innerWidth*i)) > 100 ){
                slideContainer.style.transform = `translateX(-${i-1}00vw)` 
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else if( e.changedTouches[0].clientX - (startSpot-(window.innerWidth*i)) < -100) {
                slideContainer.style.transform = `translateX(-${i+1}00vw)`
                document.querySelector(".slide-container").style.transition = 'all .5s';
            } else { 
                slideContainer.style.transform = `translateX(-${i}00vw)`
            }
        }    
    setTimeout(()=>{document.querySelector(".slide-container").style.transition = 'none';},500);
    });
}