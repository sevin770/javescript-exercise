
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
        <button class="buy">구매</button>
      </div>
    `;
    document.querySelector(".row").insertAdjacentHTML("beforeend", col);
  });
}
productsArray(products);

//구매 누르면 장바구니에 상품명 추가? localStorage에 저장하자. 

//localStorage.setItem() 저장
localStorage.setItem('이름','kim');

//localStorage.getItem() 출력
localStorage.getItem('이름');

//localStorage.removeItem() 삭제
localStorage.removeItem('이름');

//localStorage.removeItem() 수정 : 이건 문법이 없다. 코드를 짜야한다. (1)자료꺼냄(2)수정함(3)다시넣음

//localStorage에는 문자와 숫자밖에 저장할 수 없다.
localStorage.setItem('num1',[1,2,3]); // 배열을 강제로 문자로 변환해서 저장함. '1,2,3'

//array,obecet저장하려면?? json으로 바꾸면 저장가능 (json: array,object를 ''쳐서 문자취급해주는 자료형)

var arr = [1,2,3];
var newArr = JSON.stringify(arr); //json으로 바꿔줌

localStorage.setItem('num2', newArr);
var 꺼낸거 = localStorage.getItem('num2');
console.log(꺼낸거);

//꺼내면 다시 문자열로 꺼내지니까 json을 array,object로 변환해주자.
console.log(JSON.parse(꺼낸거));

//localStorage가 아니라 sessionStorage를 사용하려면? localStorage을 sessionStorage로 바꿔주기만 하면 됨.
