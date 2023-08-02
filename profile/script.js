const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const oldPass = document.getElementById('oldPass');
const newPass = document.getElementById('newPass').value.trim();
const confirmNewPass = document.getElementById('confirmNewPass').value.trim();
const saveInfoBtn = document.getElementById('saveInfo-btn');
const changePassBtn = document.getElementById('changePass-btn');
const logOutBtn = document.getElementById('logOut-btn');

let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
console.log(currentUser);


fName.innerText = currentUser.userName;
console.log(fName.innerText);
lName.innerText = currentUser.lastName;
console.log(lName.innerText);
oldPass.innerText = currentUser.password;


 saveInfoBtn.addEventListener('click',(event)=>{
    event.preventDefault;
    currentUser.firstName=fName.value.trim();
    currentUser.lastName=lName.value.trim();
    if(newPass===confirmNewPass){
        currentUser.password=confirmNewPass;
    }else{
        alert('New Password and confirm password not matching')
    }
    JSON.stringify(sessionStorage.setItem('loggedInUser'));
 
 });

   logOutBtn.addEventListener('click',(event)=>{
        window.location.href='../index.html';
    });