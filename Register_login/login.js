document.getElementById("registerForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;

  console.log(email,password);

  let userData=JSON.parse(localStorage.getItem("userinfo"));

  if(userData.useremail == email && userData.userpassword == password){
    window.location.href  = "../home/home.html";
  }
  else{
    alert("Invalid credentials....");
    window.location.reload();
  }
  });