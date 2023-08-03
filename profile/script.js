const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const oldPass = document.getElementById('oldPass');

const saveInfoBtn = document.getElementById('saveInfo-btn');
const changePassBtn = document.getElementById('changePass-btn');
const logOutBtn = document.getElementById('logOut-btn');

let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
console.log(currentUser);


fName.value = currentUser.firstName;
console.log(fName.innerText);
lName.value = currentUser.lastName;
console.log(lName.innerText);
oldPass.value = currentUser.password;

saveInfoBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    currentUser.firstName=fName.value;
    currentUser.lastName= lName.value;
    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
    console.log(currentUser);
    let users = JSON.parse(localStorage.getItem('users'));
            // users will be array of objects
            const obj = users.find(userObj=>{
                return userObj.email === currentUser.email;
                // if obj with email is exist 
            })
            obj.firstName=fName.value;
            obj.lastName=lName.value;
            localStorage.setItem('users',JSON.stringify(obj));
    alert("Details updated")
})


changePassBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const newPass = document.getElementById('newPass').value.trim();
const confirmNewPass = document.getElementById('confirmNewPass').value.trim();
    // currentUser.firstName=fName.value.trim();
    // currentUser.lastName=lName.value.trim();
    if(oldPass.value===currentUser.password){
        if(newPass===confirmNewPass){
            currentUser.password=confirmNewPass;
            sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
        console.log(currentUser);
        let users = JSON.parse(localStorage.getItem('users'));
            // users will be array of objects
            const index = users.findIndex(userObj=>{
                return userObj.email === currentUser.email;
                // if obj with email is exist 
            })
            users[index].password=newPass;
            // obj.password=newPass;
            localStorage.setItem('users',JSON.stringify(users));
        alert("password changed successfully");
        window.location.href="../shop";
        }else{
            alert('New Password and confirm password not matching')
        }   
    }
    else{
        alert('Please enter correct old password')
    }
    
    
 
 });

//    logOutBtn.addEventListener('click',(event)=>{
//         window.location.href='./index.html';
//     });