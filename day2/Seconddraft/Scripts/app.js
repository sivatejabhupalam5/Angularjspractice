
// Importing credentials from a separate file
//import {credentials} from './credentials.js';

$(document).ready(()=>{

debugger
    $("#btnlogin").click(()=>{
        let emailid=$("#emailid").val();
        let password=$("#password").val();
        console.log(emailid);
        if(onvalidate(emailid,password)){
         $("#validation-message").text("Login Successfull");

        }
        else{
            $("#validation-message").text("Login Failed");
        }
});

});



