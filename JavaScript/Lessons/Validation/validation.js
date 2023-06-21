function register(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if(fullname == "" || email == "" || phone == "" || password == "" || confirmpassword == ""){
        document.getElementById("message").innerHTML = "All inputs are required";
    }else if ((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
        document.getElementById("message").innerHTML = "Please enter a valid full name";
    }else if ((!email.match(/\S+@\S+\.\S+/)) || email.length > 50){
        document.getElementById("message").innerHTML = "Please enter a valid email";
    }else if (password.length < 5 || confirmpassword.length < 5){
        document.getElementById("message").innerHTML = "Password should not be less than 5 characters";
    }else if (password !== confirmpassword){
        document.getElementById("message").innerHTML = "Password and confirm password do not match";
    }else{
        document.getElementById("message").innerHTML = "Registration Successful";
        window.location.href = "dashboard.html";
    }
}

//NOTES: .match(), .length are known as string methods. We have a lot of others.