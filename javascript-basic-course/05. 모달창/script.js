
//네비게이션바 
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
});


//class 부착식으로 개발하면 - 애니메이션 추가 쉬움, 나중에 재사용 편리

//모달창 바닐라자바스크립트

// document.querySelector("#open").addEventListener("click", function () {
//   document.querySelector(".black-bg").classList.add("modal-show");
// });

// document.querySelector("#close").addEventListener("click", function () {
//   document.querySelector(".black-bg").classList.remove("modal-show");
// });



//모달창 제이쿼리

$('#open').on('click',function(){
    $('.black-bg').addClass('modal-show');
});
$('#close').on('click',function(){
    $('.black-bg').removeClass('modal-show');
});

