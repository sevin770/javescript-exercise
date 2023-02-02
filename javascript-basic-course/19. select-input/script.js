//옵션 선택시 셀렉트박스 나타나게 하기. 혼자하기

// //html 셀렉트박스에 onchange="selectBox()" 작성
// //option에 value값을 각각 1, 2로 줌.

// function selectBox(){
//   let selectList = document.querySelector('#form');
//   let optionValue= selectList.options[selectList.selectedIndex].value;
//   console.log(optionValue);

//   if( optionValue == 2 ){
//     document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
//   } else {
//     document.querySelectorAll('.form-select')[1].classList.add('form-hide');
//   }
// }

//답

// $('.form-select').eq(0).on('input', function(){

//   var value = $('.form-select').eq(0).val();
//   //var value = e.currentTarget.val();
//   //var value = this.val();
//   if (value == '셔츠') {
//     $('.form-select').eq(1).removeClass('form-hide');
//   }

// });




//다시해보기

let selcetForm = document.querySelector("#form");
let shirtSize = document.querySelectorAll(".form-select");

selcetForm .addEventListener("input", function (e) {
  var optionVal = document.querySelectorAll("#form")[0].value;
  console.log(optionVal);

  if (optionVal == "셔츠") {
    shirtSize[1].classList.remove("form-hide");
  } else {
    shirtSize[1].classList.add("form-hide");
  }
});
