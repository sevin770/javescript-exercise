document.querySelector("#open").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("modal-show");
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("modal-show");
});

document.querySelector(".black-bg").addEventListener("click", function (e) {
    
    // e.target; // 유저가 실제로 누른 것, 이벤트가 발생한 곳.
    // console.log(e.target);

    // e.currentTarget; // 이벤트리스너 달린 곳. this와 같다.
    // console.log(e.currentTarget);
    // this;

    // e.preventDefault; //이벤트 기본동작 막아줌.
    // e.stopPropagation; //내 상위요소로 이벤트 버블링 막아줌.

    if( e.target == document.querySelector(".black-bg")) {
        document.querySelector(".black-bg").classList.remove("modal-show");
    }

});


//이벤트 버블링 : 이벤트가 상위html로 퍼지는 현상