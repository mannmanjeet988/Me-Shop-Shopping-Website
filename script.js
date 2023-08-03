// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

if(sessionStorage.getItem("loggedInUser")){
    alert("you have already logged in");
      setTimeout(()=>{
      window.location.href  ="./profile/index.html";
     },1000);
}

const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click",(event)=>{
   if(!sessionStorage.getItem("loggedInUser")){
      alert("you need to signup or login first to access products");
       setTimeout(()=>{
        window.location.href  ="./index.html";
       },1000);
    }
})



const logInBtn = document.getElementById("login-btn");
const signUpBtn =   document.getElementById("signup-btn");

logInBtn.addEventListener("click",()=>{
   window.location.href  ="./login/index.html";
})

signUpBtn.addEventListener("click",()=>{
    window.location.href  ="./signup/index.html";
 })

