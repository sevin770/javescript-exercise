//버튼 1번 누르면 345목록 출력, 2번 누르면 678목록 출력
//https://codingapple1.github.io/js/more1.json : 345목록
//https://codingapple1.github.io/js/more2.json : 678목록

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

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

var click = 0;
document.querySelector("button").addEventListener("click", function () {

  function dataArray(array){array.forEach((a, i) => {
    var col = `
      <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
      </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", col);
  });}

  click++;
  console.log(click);

  if (click == 1) {
    fetch("https://codingapple1.github.io/js/more1.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dataArray(data);
      });
  } else if (click == 2) {
    fetch("https://codingapple1.github.io/js/more2.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((a, i) => {
            var col = `
              <div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100" />
                <h5>${a.title}</h5>
                <p>가격 : ${a.price}</p>
              </div>`;
            document.querySelector(".row").insertAdjacentHTML("beforeend", col);
          });
      });
      document.querySelector("button").style.display = 'none';
  }
});
