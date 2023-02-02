//document.querySelector = $

$(document).ready(function(){

    //$("h1").css("color","red");
    // css(속성,속성의값) 

    //console.log($("h1").css("color"));

   // $("h1").css("font-size","10rem");

    //addClass , removeClass , hasClass


    //여러 클래스 추가 가능 그냥 띄어쓰고 쓰면 됨.
    //$("h1").addClass("big-title color");

    //$("h1").text("bye") // html 텍스트만 바꿔짐, 태그 무시되고 텍스트로 나옴.
    //$("button").text("Don't Click Me"); 
    // 바닐라 자바사크립트에서는 innerHTML , 태그추가 가능 ,
    // 제이쿼리에서는 .html을 쓰면 태그가 적용 됨.

    $("button").html("<em>누르지 마</em>");


//attr 속성 메서드 attr(속성,값입력)

// console.log($("img").attr("src"));

// $("a").attr("href","http://www.google.com")
// $("h1").attr("class","big-title color");

$("h1").click(function(){
    $("h1").css("color","purple")
});

//바닐라 자바스크립트

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "red";
//     });
// }

//제이쿼리

// $("button").click(function(){
//     $("h1").css("color","red");
// });
//

//제이쿼리 키프레스
// $("input").keypress(function(e){
//     //console.log(e.key);
//     $("h1").text(e.key);
// });

//마우스오버

// $("h1").on("mouseover", function(){
//     $("h1").css("color","yellow");
// });

//html코드 넣는법
//before : 앞에 내용 삽입
//after : 뒤에 내용 삽입
//prepend : 자식요소 맨 앞에 내용삽입 / 요소의 내부
//append : 자식요소 맨 뒤에 내용삽입  / 요소의 내부

//해당 요소 전에 넣기 .before // 
//<button>new</button><h1>hellow</h1>
$("h1").before("<button>new</button>");

//해당 요소 뒤에 넣기 .after
//<h1>hellow</h1><button>new</button>
$("h1").after("<button>new</button>");
//<button></button><h1>hellow</h1>


//해당 요소 내부 앞에 넣기 .prepend
//<h1><button>new</button>hellow</h1>
$("h1").prepend("<button>new</button>");
//해당 요소 내부 뒤에 넣기 .append
//<h1>hellow<button>new</button></h1>
$("h1").append("<button>new</button>");

//삭제
//remove

//보이기 숨기기
//show, hide, toggle
// $("button").on("click", function(){
//     $("h1").toggle();
// });

//fadeIn, fadeOut, fadeToggle
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// });

//slideIn, slideOut, slideToggle
// $("button").on("click", function(){
//     $("h1").slideToggle();
// });

//animate ({})  중괄호 사이에는 숫자 값이 있는 것만 가능. 색상같은건 안됨. margin,opacity,padding등등
// $("button").on("click", function(){
//     $("h1").animate({opacity: 0.5});
// });

    $("button").on("click", function(){
        $("h1").slideUp().slideDown().animate({opacity: 0.5});
    });


});

