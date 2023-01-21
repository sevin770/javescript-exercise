- Web Components 
js문법으로 구현할 수 있는 브라우저 기본 기능이다. 

◆ 커스텀 태그의 장점 
html의 중복 제거, 다른 페이지에서 재활용 가능, 일종의 함수문법, 파라미터문법 같은 것도 구현가능

◆ 커스텀태그로 길고 복잡한 HTML축약하는 법
customElements.define('작명', 축약할HTML); // 축약할 HTML은 class로 써야한다.

- 구조는 아래와 같이 써야 함.

class 클래스 extends HTMLElement {
    connectedCallback(){
        //축약할 HTML적는 곳, 여기서 this는 새로 생성될 <custom-input>의 요소
        this.innerHTML = `<label>이메일인풋이에요</label><input>` // 1번 방법.
        let 변수 = document.createElement('label'); // 2번 방법. 훨씬 빠르다.
        this.appendChild(변수);
    }
}
customElements.define('custom-input', 클래스); 

//html 파일에 아래와 같이 쓰면 축약된 html태그가 나온다.
<custom-input></custom-input> 

◆ 파라미터문법 활용
각각 다른 내용 사용할 수 있다. 

//<body>
<custom-input name = '이메일'></custom-input> //html의 attribute문법

//<script>
class 클래스 extends HTMLElement {
    connectedCallback(){
        let name = this.getAttribute('name'); // attribute가져오기
        this.innerHTML = `<label>${name}인풋이에요</label><input>` // 이메일인풋이에요 출력
    }
}
customElements.define('custom-input', 클래스); 


◆ 리액트나 vue처럼 attribute 변경감지기능 제공됨. 
props(attribute) 변경되면 html자동 재렌더링됨

- attribute가 변경될 때마다 코드 실행가능.

class 클래스 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<label>이메일인풋이에요</label><input>`
    }
    static get observedAttributes(){ // name이라는 attribute가 바뀌는지 감시해주세요 라는 코드
        return ['name'] 
    } 
    attributeChangedCallback(){ // 바뀌면 이거 실행해주세요 라는 코드
        console.log(this.getAttribute('name'));
    }
}
customElements.define('custom-input', 클래스); 



(참고)
-> 리액트나 뷰가 더 쉽고 많은 기능을 제공함. 
-> Web Components 기능
쉽게 쓸 수 있게 도와주는 Lit, Stencil 등이 있다.