const test1 = document.querySelector("div.hello1:first-child h1");
/*
function handleTitleClick() {
  const currentColor = test1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  test1.style.color = newColor;
}*/

// test1.onclick = handleTitleClick;
/*
function handleTitleClick() {
  const activeClass = "active";
  if (test1.className === activeClass) {
    test1.className = "";
  } else {
    test1.className = activeClass;
  }
}
//여기에는 버그가 있을 수 있다. ex)h1을 바꾸는데 h1에 class가 설정 되어있을경우(sexy-font)
//그 class가 사라지기 떄문에 자바스크립트의 모든 class name을 변경하면 안된다
*/

function handleTitleClick() {
  const activeClass = "active"; /*
  if (test1.classList.contains(activeClass)) {
    test1.classList.remove(activeClass);
  } else {
    test1.classList.add(activeClass);
  } => toggle로 주석처리한 5줄을 대체 할 수 있다. */

  test1.classList.toggle("active");
  // 토글이 test1.classList의 상태를 확인해 active가 있다면 remove를 없다면 add를 알아서 해준다.
}

test1.addEventListener("click", handleTitleClick);
