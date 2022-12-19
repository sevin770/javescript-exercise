function buyMilk(money, costBottles){

    //var numberOfBottles = Math.floor(money / 1.5);
    //1.5는 우유의 개당 가격
    console.log("우유를 " + calcBottles(money,costBottles) + " 개 샀다.");
    return calcChange(money, costBottles);
}

function calcBottles(startingMoney,costPerBottles){
    
    var numberOfBottles = Math.floor(startingMoney / costPerBottles);
    return numberOfBottles;
}

function calcChange(startingAmonut,costPerBottles){

    var change = startingAmonut % costPerBottles;
    return change;

}

// function calcChange(startingMoney, costPerBottles){

//     var calcChange = Math.floor(startingMoney % costPerBottles);
//     return calcChange;
// }

console.log("남은 돈은 " + buyMilk(10, 2) + " 원 이다.");