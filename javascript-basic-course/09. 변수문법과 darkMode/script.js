

//dark mode
//클릭횟수가 홀수면 내부 글자를 ligit로 변경
//클릭횟수가 짝수면  내부 글자를 dark로 변경


var count = 0;

document.querySelector('.badge').addEventListener("click", function(){
  count += 1; // count++1, count=count+1
  console.log(count);
  if( count % 2 == 0 ){
    document.querySelector('.badge').innerHTML = 'Dark 🔄'
  } else if ( count % 2 == 1){
    document.querySelector('.badge').innerHTML = 'Light 🔄'
  }
});




