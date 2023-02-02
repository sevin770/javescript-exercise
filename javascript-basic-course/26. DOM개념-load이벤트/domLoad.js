1. 브라우저는 html을 발견하면 object자료로 바꿔서 보관해 둔다.
자바스크립트가 HTML에 대한 정보들 (id, class, name, style, innerHTML 등)을 object 자료로 정리한걸 DOM이라고 부른다.


2. 브라우저는 HTML 문서를 위에서 부터 읽으며 DOM을 생성한다.
그래서 script는 html파일 맨 밑, body태그 끝나기 전에 써줘야 함.  
태그에 대한 dom이 생성되지 않았는데 자바스크립트를 실행하면 에러가 난다.

3. 혹은 자바스크립트 실행을 약간 나중으로 미루는 방법도 있다.
"이 코드는 HTML 전부 다 읽고 실행해주세요" 라는 코드. html을 다 읽었는지 알려주는 이벤트리스너

$(document).ready(function(){ 실행할 코드 })
document.addEventListener('DOMContentLoaded', function() { 실행할 코드 }) 


4. load 이벤트리스너
dom생성, 이미지, css, js 파일이 로드됐는지 채크 가능.  
하지만 외부파일에 적어놓으면 js파일보다 이미지가 먼저 로드되기 때문에 이벤트 발생체크를 못할 수도 있다. 

셀렉터로찾은이미지.addEventListener('load', function(){
    //이미지 로드되면 실행할 코드 
  })

  $(window).on('load', function(){
    //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드 
  });
  
  window.addEventListener('load', function(){
    //document 안의 이미지, js 파일 포함 전부 로드가 되었을 경우 실행할 코드
  })

window에 붙일 수도 있다. document에 포함된 이미지,css파일등 모든 것이 로드 됐는지 체크해줌.
ready와 차이점 : .ready()는 don생성만 체크하는 함수. load는 모든 파일과 이미지 로드상태 체크.

(ex)"이미지가 다 로드되면 사이트 보여주세요" 라는 코드를 짤 수 있다.
