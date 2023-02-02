
// 1. 함수로 축약할 때 변수있으면 파라미터로 바꾸기
// 2. data-id로 몰래 숨기기 가능
// 3. 이벤트리스너는 하나만 있어도 개발이 가능할 수 있다. (가능한 적게 쓰기)


let tabBtn = document.querySelectorAll(".tab-button");
let content = document.querySelectorAll(".tab-content");

// for (let i = 0; i < tabBtn.length; i++) {
//   tabBtn[i].addEventListener("click", function () {
//     for (let j = 0; j < tabBtn.length; j++) {
//       tabBtn[j].classList.remove("orange");
//       content[j].classList.remove("show");
//     }
//     tabBtn[i].classList.add("orange");
//     content[i].classList.add("show");
//   });
// }

function tabEvent(num) {
  for (let j = 0; j < tabBtn.length; j++) {
    tabBtn[j].classList.remove("orange");
    content[j].classList.remove("show");
  }
  tabBtn[num].classList.add("orange");
  content[num].classList.add("show");
}

//이벤트리스너를 쓸 때마다 램용량을 사용하기 때문에 줄어들수록 성능이 좋다.

// document.querySelector(".list").addEventListener("click", function (e) {
//   if (e.target == tabBtn[0]) {
//     tabEvent(0);
//   }
//   if (e.target == tabBtn[1]) {
//     tabEvent(1);
//   }
//   if (e.target == tabBtn[2]) {
//     tabEvent(2);
//   }
// });

//html태그에 몰래 정보숨기기 가능 data-자료이름="값"
//숨겼던 자료출력은 셀렉터.dataset.자료이름
//document.querySelector(".tab-button").dataset.id
//이걸 이용하면 if문 쓸 필요 없다.

document.querySelector(".list").addEventListener("click", function (e) {
  
  console.log(parseInt(e.target.dataset.id));
  tabEvent(parseInt(e.target.dataset.id)) // parseInt() 값이 문자열이기 때문에 숫자로 변환해서 쓰면 더 정확함.

});
