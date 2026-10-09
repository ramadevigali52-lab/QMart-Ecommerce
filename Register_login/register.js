// document.getElementById("registerForm").addEventListener("submit", function(e) {
//   e.preventDefault();
  
//   let user = {
//     fullName: document.getElementById("fullName").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//     mobile: document.getElementById("mobile").value
//   };

//   localStorage.setItem("user", JSON.stringify(user));
//   alert("Registered Successfully!");
//   window.location.href = "login.html";
// });


document.getElementById("registerForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  let name=document.getElementById("fullName").value;
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let mobile=document.getElementById("mobile").value;

  console.log(name,email,password,mobile);

  let userData = {
    userfullName: fullName,
    useremail: email,
    userpassword: password,
    usermobile: mobile
  };
  console.log(userData);
  localStorage.setItem("userinfo",JSON.stringify(userData));
  alert("Account Created Successfully!!!");
  window.location.href="./login.html";
});