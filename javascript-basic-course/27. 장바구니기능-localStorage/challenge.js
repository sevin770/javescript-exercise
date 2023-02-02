var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

function productsArray(products) {
  products.forEach((a, i) => {
    var col = `
        <div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${a.title}</h5>
          <p>가격 : ${a.price}</p>
          <button class="buy">구매</button>
        </div>
      `;
    document.querySelector(".row").insertAdjacentHTML("beforeend", col);
  });
}
productsArray(products);

//혼자해보기1 - 구매버튼 누르면 누른 상품명localStorage에 저장하기. array로 저장/추가 되도록''

// 배열을 함수 안에 줘서 push가 안 먹혔었다...

// var newArr = [];

// function local() {
//   for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".buy")[i].addEventListener("click", function () {
//       var productTitle = JSON.stringify(products[i].title);
//       localStorage.setItem("productsArray", productTitle);

//         var getTitle = JSON.parse(localStorage.getItem("productsArray"));
//         if(newArr.includes(getTitle)){
//           localStorage.setItem("productsArray", JSON.stringify(newArr));
//           return newArr;
//         } else {
//         newArr.push(getTitle); 
//         localStorage.setItem("productsArray", JSON.stringify(newArr));
//         console.log(newArr);
//         return newArr;
//         }
//     });
//   }
// }
// local();


//혼자해보기2 - 중복방지가 아니라 누르면 중복갯수가 올라가도록 하려면?

var newArr = [];
function local() {
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".buy")[i].addEventListener("click", function (n) {
      var productTitle = JSON.stringify(products[i].title);
      localStorage.setItem("productsArray", productTitle);

        var getTitle = JSON.parse(localStorage.getItem("productsArray"));

        //localStorage.setItem("productsArray", JSON.stringify(newArr));
        //console.log(newArr);
        newArr.push(getTitle); 

        let getCount = (arr) => arr.reduce((a,v) => ({...a,[v] : (a[v] || 0) + 1}), {});
        let test = getCount(newArr);
        console.log(test);

        localStorage.setItem("productsArray", JSON.stringify(test));

    });
  }
}
local();



//답지
//1.구매버튼 누르면 2.지금누른버튼 윗윗글자 가져와서 3.localStorage에 저장

// $('.buy').click(function(){
//   var title = $(e.target).siblings('h5').text();
//   if (localStorage.getItem('cart') != null ){
//     var 꺼낸거 = JSON.parse(localStorage.cart);
//     꺼낸거.push(title);
//     localStorage.setItem('cart', JSON.stringify(꺼낸거));
//   } else {
//     localStorage.setItem('cart', JSON.stringify([title]))
//   }
// });








//혼자해보기2 - cart.html방문시 localStorage에 저장된 상품명들 다 보여주기

var cart = 
`<form action="./cart.html">
<button class="goCart">장바구니</button>
</form>`;

document.querySelector('.container').insertAdjacentHTML('beforeend', cart);
