
//버튼 누르면 각각 다른 안내문 띠우기

document.querySelector("#quiz").addEventListener('click',function(e){
    switch (e.target.innerHTML) {
        case '와이프':
            alert('와이프를 좋아하시네요.');
            break
        case '부모님':
            alert('효자시네요');
            break
        case '키우던 개':
            alert('사람보다 개!');
            break
    }   
});