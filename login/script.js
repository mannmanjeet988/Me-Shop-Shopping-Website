const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('logIn-btn');
let errmsg = document.querySelector("#err-msg");

// if(sessionStorage.getItem("loggedInUser")){
//     alert("you have already logged in");
//       setTimeout(()=>{
//       window.location.href ="../shop/index.html";
//      },1000);
// }

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('fields are mandatory');
    }
    else {
        let users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            console.log('users',users)
            let currentUser = users.find(user => {
                return user.email === email.value.trim();
            });
            if (currentUser) {
                if(password.value.trim()===currentUser.password){
                    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
                    window.location.href='../profile';
                    alert('logged in');
                }
                else{
                    alert('incorrect password');
                }
            }
            else {
                alert(`${email.value} is not available. You must sign in first`);
            }
        }
        else {
            alert('you have not signed up');
        }
    }
})