var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//네모그리는 법
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100); // (위치x,위치y,사이즈넓이,사이즈높이)

var img2 = new Image();
img2.src = 'dinosaur.png'; 

//등장캐릭터의 속성부터 object자료에 정리해두면 편리하다.
var dino = {
    x : 10,
    y: 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height); // 7. 네모 말고 이미지 넣으려면?
        ctx.drawImage(img2, this.x, this.y) // 7. 이미지.
    }
}
dino.draw() // 캐릭터 등장할 때마다 호출하면 됨.

//7. 네모 말고 이미지가 나오도록 하는 법. 네모는 일명hitbox
var img1 = new Image();
img1.src = 'cactus.png';

//장애물도 역시 속성부터 object자료에 정리해 둔다. 
//근데 장애물은 width,height가 각각 다르니까 비슷한 object들이 많을 것이다 -> class이용

class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200; 
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img1, this.x, this.y) // 7. 이미지.
    }
}
var cactus = new Cactus();
//cactus.draw();

//캐릭터가 이동하게 하려면? x좌표 1초에 60번 정도 x++해준다. 
// function 프레임마다실행할거(){
//     requestAnimationFrame(프레임마다실행할거);
//     ctx.clearRect(0,0, canvas.width,canvas.height); //초기화
//     dino.x++;
//     dino.draw();
// }
// 프레임마다실행할거();
//------------------------------

//장애물이 움직이도록 하기
//참고: 실행횟수는 모니터 FPS에 따라 다르다.
//초당 x 프레임당 o / 1초 = 모니터프레임
// 장애물 여러개 관리하기 
// 장애물마다 array담아서 보관한다.

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0; // 5. 점프구현
var animation;

function 프레임마다실행할거(){
    animation = requestAnimationFrame(프레임마다실행할거); //애니메이션 중단할 때도 가져다 쓴다. 
    timer++; //0. 시간이 흐르도록.

    ctx.clearRect(0,0, canvas.width,canvas.height); //초기화

    if( timer % 200 === 0){ //1초에 144프레임 보여주니까 144당 1초  
        var cactus = new Cactus(); // 1. 144프레임당 장애물 생성
        cactus여러개.push(cactus); // 2. array에 집어넣음
    }
    cactus여러개.forEach((a,i,o)=>{ //3. array에 있던거 다 draw()시켜주세요.
        //4. x좌표가 0미만이면 제거
        if (a.x < 0) {
            o.splice(i,1);
        }
        a.x--;

        충돌하냐(dino, a); // 6. 충돌체크는 여기서 한다. 주인공 vs 장애물 모두 체크해야하니까.

        a.draw();
    })
    //5. 점프구현
    
    if(점프중 == true) {
        dino.y--; // 1초에 얼만큼 올라가나 설정. 
        점프timer++; //점프시 프레임마다 +1 된다.
    }
    if(점프중 == false){
        if(dino.y < 200){
            dino.y++;
        }
    }
    if (점프timer > 100){ //100프레임이 지나면 멈추도록.
        점프중 = false;
        점프timer = 0;
    }
    dino.draw();
}
프레임마다실행할거();

//6. 충돌확인
function 충돌하냐(dino, cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 < 0) { // 겹치면
        ctx.clearRect(0,0, canvas.width,canvas.height); //초기화
        cancelAnimationFrame(animation) //정지
    }
}



//5.점프구현
var 점프중 = false;
document.addEventListener('keydown', function(e){
    if(e.code ==='Space'){
        점프중 = true; 
    }
})

