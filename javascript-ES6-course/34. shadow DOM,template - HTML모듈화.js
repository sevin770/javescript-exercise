복잡한 HTML태그
<input type="range">
이걸 쓰면 복잡한 레이아웃이 나온다. 
실제로 여러개 div를 사용해서 만든 건데 숨겨져 있다.

크롬 개발자도구 - 설정 - show user agent shadow DOM
하면 코드를 까볼 수 있다. 
일반적으로는 볼 수 없는 숨겨진 HTML : shadow DOM

◆ shadow DOM 만드는 법
shadowRoot를 열어주는 함수.
attachShadow({mode:'open'});

<div id="mordor"></div>
//<script>
    document.querySelector('#mordor').attachShadow({mode:'open'});
    document.querySelector('#mordor').shadowRoot.innerHTML = '<div>숨길html태그</div>'
//</script>

//출력해보면 shadowRoot안에서만 볼 수 있고 일반적으로는 div태그 하나만 보인다. 
//왜씀? 간지남, 스타일을 오염시키지 않음,

◆ Web Components + shoadow DOM = 완벽한 HTML모듈

<body>
<custom-input></custom-input>

//<script> 
class 클래스 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<label>이메일입력하세요</label><input>
        <style>label {color:red}</style> 
        `; // 스타일을 넣고 싶다면 그냥 이렇게 넣으면 된다. 하지만 다른 태그들까지 오염을 시킨다. (현재 예시로는 custom-input뿐만 아니라  label태그까지 붉게 변함)
    }
}
customElements.define('custom-input', 클래스); 

◆ Web Components 에 스타일을 넣고 싶다면 -> shadow DOM에 넣으면 좋다. 
shadow DOM에 넣은 것들은 외부에 영향을 주지 않기 때문이다. 

class 클래스 extends HTMLElement {
    connectedCallback(){
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `<label>이메일입력하세요</label><input>
        <style>label {color:red}</style>  
        `; // 이렇게 넣어주면 쉐도우 루트 안에 독립적인 공간에서 적용되기 때문에 오염x 
    }
}
customElements.define('custom-input', 클래스); 


- 이런 경우에 div에 스타일을 줄 경우 inherit될 수도 있지만 바깥으로 오염시키지는 않음.
<div>
<custom-input></custom-input>
</div>

- 특징 : 그냥 짜면 더러워보인다. 
<HTML 임시보관함>을 사용한다.

◆ template
<template></templae> 안에 적은 태그들은 html페이지에 렌더링이 되지 않는다. 
쉐도우돔에 넣을 html태그들을 템플릿 안에 적고 가져다 쓴다. 
shadowRoot.append(id이름.content.cloneNode(true));

<custom-input></custom-input>

<template id="template1">
  <label>이메일을 입력하쇼</label><input>
  <style>label { color : red }</style>
</template>

//<script>
  class 클래스 extends HTMLElement {
    connectedCallback() {
      this.attachShadow({mode : 'open'});
      this.shadowRoot.append(template1.content.cloneNode(true));
    }
  }
  customElements.define("custom-input", 클래스);

◆shadow DOM에 이벤트리스너 부착가능

class 클래스 extends HTMLElement {
    connectedCallback() {
      this.attachShadow({mode : 'open'});
      this.shadowRoot.append(template1.content.cloneNode(true));

      let el = this.shadowRoot.querySelector('label');
        el.addEventListener('click', function(){
          console.log('클릭함')
    }
  }
}
  customElements.define("custom-input", 클래스);
