
// if (sessionStorage.getItem("loggedInUser")) {
//   alert("you have already logged in");
//   setTimeout(() => {
//     window.location.href = "../shop/index.html";
//   }, 100);
// }

const cartLink = document.getElementById("cart-link");
cartLink.addEventListener("click", (event) => {
   console.log("CLICKED")
  if (!sessionStorage.getItem("loggedInUser")) {
    alert("you need to signup or login first to access products");
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 200);
  }
});

const logInBtn = document.getElementById("login-btn");
const signUpBtn = document.getElementById("signup-btn");

logInBtn.addEventListener("click", () => {
  console.log("login");
  window.location.href = "./login/index.html";
});

signUpBtn.addEventListener("click", () => {
  window.location.href = "./signup/index.html";
});
