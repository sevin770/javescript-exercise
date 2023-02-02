var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

//혼자하기
// var col = `
//     <div class="col-sm-4">
//       <img src="https://via.placeholder.com/600" class="w-100" />
//       <h5></h5>
//       <p></p>
//     </div>
// `;
// document.querySelector(".row").insertAdjacentHTML("beforeend", col);
// document.querySelector(".row").insertAdjacentHTML("beforeend", col);
// document.querySelector(".row").insertAdjacentHTML("beforeend", col);
//$('.row).append(템플릿)

// for(let i = 0; i < products.length; i++){
//   document.querySelectorAll('h5')[i].innerHTML = products[i].title;
//   document.querySelectorAll('p')[i].innerHTML = '가격 : ' + products[i].price;
// }

//----------------------------------------------------------------------
//답
//a = products[i]
products.forEach((a, i) => {
  var col = `
  <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
  </div>
`;
  document.querySelector(".row").insertAdjacentHTML("beforeend", col);
});

//----------------------------------------------------------------------

//더보기 누르면 상품 3개 가져와서 출력
//https://codingapple1.github.io/js/more1.json



document.querySelector("button").addEventListener("click", function () {

  fetch("https://codingapple1.github.io/js/more1.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((a,i)=>{
        var col = `
          <div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100" />
            <h5>${data[i].title}</h5>
            <p>가격 : ${data[i].price}</p>
          </div>`;
          document.querySelector(".row").insertAdjacentHTML("beforeend", col);
      });
    });
});


//답
// $('#more').click(function(){
//   $.get('https://codingapple1.github.io/js/more1.json')
//     .done((data)=>{
      
//       data.forEach((a, i)=>{
//         var 템플릿 = 
//         `<div class="col-sm-4">
//           <img src="https://via.placeholder.com/600" class="w-100">
//           <h5>${data[i].title}</h5>
//           <p>가격 : ${data[i].price}</p>
//         </div>`;
//         $('.row').append(템플릿)
//       })
      
//     });
// });

