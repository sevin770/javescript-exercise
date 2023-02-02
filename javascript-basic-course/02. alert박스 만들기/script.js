
//<button onclick="document.getElementsByClassName('alert-box')[0].style.display='block';">닫기</button>
//이런 식으로 html내에 넣으면 지저분해지니까..


// function문법
// 1. 긴 코드 짧은 단어로 축약하고 싶을 때
// 2. 긴 코드 재사용이 잦을 때


// function 작명(){
//     document.getElementsByClassName('alert-box')[0].style.display='block';
// }

//html 내에는 <button onclick="함수명()"> 이렇게 넣어준다.
//함수명 영어작명시엔 1. 소문자 시작 2. camelCase

    // function 알림창닫기(){
    //     document.getElementsByClassName('alert-box')[0].style.display = 'none';
    //   }

// 자주나는 오타
// 1. js코드는 html 맨 밑에 짜야함.
// 2. 오타주의
// 3. 그냥 기본문법 오타
    


// 구멍 - 함수 하나로 다양한 코드 실행이 가능해짐
// 비슷한 함수가 많으면 가변적인 구멍을 뚫어 놓는것.

    // function 알림창닫기(구멍){
    //     document.getElementsByClassName('alert-box')[0].style.display = 구멍;
    // }
    
    // 알림창닫기('안녕'); // 구멍자리에 안녕 넣어서 실행.
    // 알림창닫기('바보'); // 구멍자리에 바보 넣어서 실행.
    // 알림창닫기(123); // 문자는 따옴표 안에 숫자는 그냥쓰기.

    // function 알림창(구멍){
    //     document.getElementsByClassName('alert-box')[0].style.display = 구멍;
    //   }

      //<button onclick="알림창('none')">닫기</button>
      //<button onclick="알림창('display')">열기</button>

    // function plus(a) {
    //     2+a
    // }

    // plus(1); //2+1
    // plus(2); //2+2
    // plus(3); //2+3

    