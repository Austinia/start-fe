window.outerWidth;
//840
window.name;
// ''
window.open("http://www.daum.net");

window.opener;
// null
// window.close();

location.href;
// 'http://localhost:3000/04/'
// location.reload();
// reload
// history.back();
// back
// history.go(1);
// go 1
screen.width;
//1600
navigator.userAgent;
// 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
navigator.language;
// 'ko-KR'
navigator.platform;
// 'MacIntel'

//DOM 탐색
const element = document.getElementById("wrap");
// const element = document.querySelector('#wrap');
const elements = document.querySelectorAll("div");

//DOM 생성
const div = document.createElement("div");
div.id = "elete";
div.style.border = "1px solid red";
div.innerText = "Hello!";

document.body.appendChild(div);

//DOM 삽입
const ulel = '<ul id="list" style="list-style-type: none; padding: 0;"><li>remove!</li><li>Click Me!</li></ul>';
document.querySelector("#wrap").innerHTML = ulel;

//DOM 제거
const el = document.getElementById("elete");
el.remove();

const list = document.getElementById('list');
list.removeChild(list.children[0]);

//Event
//<body onload="alert(1)"> inline

window.load=function(){
  alert("loaded!");
};

window.addEventListener('load', function(){
  alert("loaded!");
})

//callback func
let clickCount = 0;
function popup(event){
  clickCount++;
  alert(clickCount);
}
element.addEventListener('click', popup);

//위임 (모든 li에게 같은 이벤트리스너 부여)
list.addEventListener("mouseover", function(event){
  if(event.target.nodeName == "LI"){
    event.target.style.color = "red";
  }
})
list.addEventListener("mouseout", function(event){
  if(event.target.nodeName == "LI"){
    event.target.style.color = "yellow";
  }
})

//event.stopPropagation(); 이벤트 전파 중지
//event.preventDefault(); // 기본 행동 중지