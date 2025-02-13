var validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
var onvalidate=(emailaddressdocument,password)=>{
    
 
  alert(emailaddressdocument+'/n'+password);
  if (!validateEmail(emailaddressdocument)) {
    alert("Invalid email format");
    console.log("Invalid email format");
    return;
   } 
  if(emailaddressdocument==="ravi.tambade@transflower.in" && password==="seed"){
    alert("Login Successfull");
    console.log("Login Successfull");

    }
    else{
        alert("Login Failed");
        console.log("Login Failed");
    }
   }