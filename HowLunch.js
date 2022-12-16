
// 누가 점심을 사나요? 선택된 사람이 식지를 모두 지불해야 함.
//혼자해보기

alert ('누가 점심을 살까요?');


var lunchFamily = [ "안젤라" , "벤" , "제니" , "마이클" , "클로이" ];



//console.log(lunchFamily.length);

function howLunch(){
    var landom = Math.random();
    landom = Math.floor(landom*10);

    if(landom < lunchFamily.length){
        console.log(landom);
    }
    else {
        return howLunch();
    }


var landomFamily = lunchFamily[landom];
console.log(landomFamily);

alert(landomFamily + " 입니다!");
}
howLunch();




//답지

// function whosPaying(names){
//     var names = [ "안젤라" , "벤" , "제니" , "마이클" , "클로이" ];
//     // var numberOfPeople = names.length;
//     // console.log(names.length);

//     var randomPersonPosition = Math.floor(Math.random() * names.length);
//     var randomPerson = names[randomPersonPosition];
//     console.log(randomPerson);
//     return randomPerson;
    
// }

// whosPaying();

