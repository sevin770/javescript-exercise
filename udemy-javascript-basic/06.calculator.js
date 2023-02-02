//나눗셈, 뺄셈도 추가해보기 

function add(num1, num2) {
    return num1 + num2;
    }
     
    function subtract(num1, num2) {
    return num1 - num2;
    }
     
    function multiply(num1, num2) {
    return num1 * num2;
    }
     
    function divide(num1, num2) {
    return num1 / num2;
    }
     
    function calculator(num1, num2, operator) {
    return operator(num1, num2);
    }
debugger; 
calculator(3,4,multiply); //  하고 콘솔창 오른쪽에 화살표아래 누르면 뭐가 잘못됐는지 프로세스를 확인가능. 함수 고칠 때 콘솔에서 저렇게 하면 됨.

//