//제이쿼리 eq(1) = querySelectorAll('')[1]

// document.querySelectorAll('.tab-button')[0].addEventListener('click',function(){
//     this.classList.add('orange');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// });

//반복문 안에 있는 변수는 let을 써주어야 함.
//변수의 범위 때문임.

let tabBtn = document.querySelectorAll(".tab-button");
let content = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", function () {
    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].classList.remove("orange");
      content[j].classList.remove("show");
    }
    tabBtn[i].classList.add("orange");
    content[i].classList.add("show");
  });
}
