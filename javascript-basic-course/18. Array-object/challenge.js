var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];



for(let i = 0; i < products.length; i++){
    document.querySelectorAll('h5')[i].innerHTML = products[i].title;
    document.querySelectorAll('p')[i].innerHTML = '가격 : ' + products[i].price;
}

//제이쿼리
// $('.card-body h5).eq(0).html(products[0].title);
// $('.card-body p).eq(0).html('가격 : ' + products[i].price);

//js 문자 덧셈은 == 문자합치기
// 1 + '2' = '12'

//문자 중간에 변수 쉽게 넣는 법 `${변수}`
var a = '안녕';
'문자' + a + '문자'
console.log(`문자${a}문자`);

