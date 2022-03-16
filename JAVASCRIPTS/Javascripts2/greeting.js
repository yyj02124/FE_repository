const loginForm = document.querySelector("#login-form"); //<form id="login-form">을 querySelector로 연결시켜 객체화
const loginInput = document.querySelector("#login-form input"); //<form id="login-form">안의 <input>을 querySelector로 연결시켜 객체화
const greeting = document.querySelector("#greeting"); //<h2 id="greeting">을 querySelector로 연결시켜 객체화

const HIDDEN_CLASSNAME = "hidden"; //hidden 객체화
const USERNAME_KEY = "username"; //username 객체화

// const link = document.querySelector("a");

function onLoginSubmit(event) {
  // 온로그인서브밋 함수
  event.preventDefault(); //이벤트 속성을 초기화 시켜준다.
  // console.log(loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME); //loginform 클래스에 hidden속성 부여
  const username = loginInput.value; //유저네임에 로그인 인풋값을 대입
  localStorage.setItem(USERNAME_KEY, username); //local storage에 저장
  // greeting.innerText = "Hello " + username; //hello+username(입력값)을 대입
  // greeting.classList.remove(HIDDEN_CLASSNAME); // greeting객체에 hidden클래스를 제거(화면에 출력)
  paintGreeting(username); //페인트그리팅에usrname을 넣어 함수출력
  console.log(username); //콘솔창에 유저네임 출력
}

function paintGreeting(username) {
  greeting.innerText = "Hello " + username; //hello+username(입력값)을 대입
  greeting.classList.remove(HIDDEN_CLASSNAME); // greeting객체에 hidden클래스를 제거(화면에 출력)
}

// // function handleLinkClick(event) {
// //   event.preventDefault();
// //   console.log(event);
// // }

//  loginForm.addEventListener("submit", onLoginSubmit); //loginform의 submit을 event 했을때 onloginsubmit 함수실행
// // link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY); //localstorage에서 username을 받아 savedusername에 대입 객체화
// console.log(savedUsername);

if (savedUsername === null) {
  //36줄의 savedusername이 없었으면
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); //loginform의 hidden클래스를 없앤다.
  loginForm.addEventListener("submit", onLoginSubmit); //loginform의 submit을 event 했을때 onloginsubmit 함수실행
} else {
  //show the greeting
  // greeting.innerText = `Hello ${savedUsername} keep going`;  // 혹은 greeting.innerText = "Hello " + savedUsername;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
}

//코드의 흐름 => {1,2,3,5,6,36} -> {39~49} -> if가 true면 10(func) / false면 23(func)
