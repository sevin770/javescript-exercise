◆ 게임만들기 동작원리
1. 화면에 네모, 원 그릴 수 있어야 함.
2. 프레임마다 코드실행 가능해야 함.(애니메이션을 만들어야 하니까)
3. collision check를 할 수 있어야 한다.(충돌계산)

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

◆ 네모그리는 법
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100);

등장캐릭터의 속성부터 object자료에 정리해두면 편리하다.