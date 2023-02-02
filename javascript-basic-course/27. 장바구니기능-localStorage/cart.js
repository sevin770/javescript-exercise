
var getArray = JSON.parse(localStorage.getItem('productsArray'));
console.log(getArray);

function result(){
getArray.forEach((a,i) => {
    var pTag = `<h3>${a}</h3>`;
document.querySelector(".container").insertAdjacentHTML("beforeend",pTag);
});
}
result();