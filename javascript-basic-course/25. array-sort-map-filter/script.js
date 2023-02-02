
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

function productsArray(products){
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
}
productsArray(products);

//가격순 정렬. (버튼 누르면 products 안의 데이터를 가격순 정렬) -혼자하기

document.querySelector("#price").addEventListener('click',function(){
  products.sort(function(a,b){
    if( a.price > b.price ) {
      return 1;
    }
    if( a.price < b.price ) {
      return -1;
    }
  });
  console.log(products);
  document.querySelector(".row").innerHTML = '';
  productsArray(products);
});


//답
// $('#price').click(function(){
//       products.sort(function(a, b){
//         return a.price - b.price
//       });
//       $('.row').html('');
//       products.forEach((a, i)=>{
//         var 템플릿 = 
//         `<div class="col-sm-4">
//           <img src="https://via.placeholder.com/600" class="w-100">
//           <h5>${products[i].title}</h5>
//           <p>가격 : ${products[i].price}</p>
//         </div>`;
//         $('.row').append(템플릿)
//       })
// }); 

//---------------------------------------------------------------------------------

//상품명 다나가역순정렬 버튼 - 혼자하기

document.querySelector("#reverse").addEventListener('click',function(){
  products.sort(function(a,b){
    if( a.title < b.title ){
      return 1;
    }
    else if ( a.title > b.title ) {
      return -1;
    }
  });
    console.log(products);
    document.querySelector(".row").innerHTML = '';
    productsArray(products);
});

//답
// $('#sort1').click(function(){
//   products.sort(function(a, b){
//     if (a.title < b.title) {
//       return 1
//     } else {
//       return -1
//     }
//   });
//   $('.row').html(''); //카드 다 없애주셈
//   products.forEach((a, i)=>{
//     var 템플릿 = `<div>상품명은 ${products[i].title}</div>`;
//     $('.row').append(템플릿)
//   })
// });

//---------------------------------------------------------------------------------

//6만원 이하 상품만 보기 버튼 - 혼자하기

document.querySelector("#sixDown").addEventListener('click',function(){
  var sixDown = products.filter(function(a){ //arrow로 쓸 땐 return 하나 뿐이라면 중괄호랑 다 생략가능 (a => a.price <= 60000);
    return a.price <= 60000;
  });
  console.log(sixDown);
  document.querySelector(".row").innerHTML = "";
  productsArray(sixDown);
});

//답
// $('#filter').click(function(){
//   var newProduct = products.filter(function(a){
//     return a.price <= 60000
//   });
//   console.log(newProduct)
// });

//---------------------------------------------------------------------------------

//응용1. 가나다순 정렬버튼

document.querySelector("#regular").addEventListener('click',function(){
  products.sort(function(a,b){
    if( a.title > b.title ){
      return 1;
    }
    else if ( a.title < b.title ) {
      return -1;
    }
  });
    console.log(products);
    document.querySelector(".row").innerHTML = '';
    productsArray(products);
});


//응용2. <input>을 이용해서 유저가 직접 가격을 입력해서 필터하는 기능?

document.querySelector("#inputBtn").addEventListener('click',function(){
  var inputValue = document.querySelector("#inputBox").value;

  if( inputValue < 50000 ){
    var inputPrice = products.filter(function(a){
      return a.price > inputValue;
    })
    alert('해당 가격 미만의 상품이 없습니다.');
  } else if (/^[0-9]+$/.test(inputValue)){var inputPrice = products.filter(function(a){
    return a.price <= inputValue;
  })
  document.querySelector(".row").innerHTML = "";
  productsArray(inputPrice);}
  else {
    alert('숫자로 입력해주세요.');
  }
});


//응용3. 원래 순서대로 되돌리기 버튼
