var wrap = document.querySelector(".wrap");
var str = "";
var className = "";
var isWhite = false;

// 마크업을 코드로 찍어주기

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    if (isWhite) {
      className = "white";
    } else {
      className = "black";
    }
    str += '<div class="' + className + '"></div>';

    //한번씩 변경
    isWhite = !isWhite;
  }
  isWhite = !isWhite;
}

wrap.innerHTML = str;

var boards = document.querySelectorAll(".wrap > div");
var selectedDom = null;

function selectBoard(event) {
  var board = event.currentTarget;
  if (selectedDom) {
    selectedDom.className = selectedDom.className.replace(" select", "");
  }
  board.className += " select";
  selectedDom = board;
}

for (var i = 0; i < boards.length; i++) {
  boards[i].addEventListener("click", selectBoard);
}
