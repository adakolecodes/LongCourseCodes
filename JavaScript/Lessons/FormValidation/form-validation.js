function formValidation(){
    
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    //If fullname, phone, email and confirmEmail are empty then show error message
    if(fullname == "" || phone == "" || email == "" || confirmEmail == ""){
        document.getElementById("message").innerHTML = "All inputs are required";
    //If fullname is not characters or length of fullname is greater than 50 then show error message
    }else if ((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
        document.getElementById("message").innerHTML = "Please enter a valid full name";
    //If phone is Not a Number(NaN) then show error
    }else if(isNaN(phone)){
        document.getElementById("message").innerHTML = "Please enter a valid phone number";
    //If email is not in the correct email format or length of email is greater than 50 then show error
    }else if ((!email.match(/\S+@\S+\.\S+/)) || email.length > 50){
        document.getElementById("message").innerHTML = "Please enter a valid email";
    //If email is not same as confirm email then show error
    }else if (email !== confirmEmail){
        document.getElementById("message").innerHTML = "Email and confirm email do not match";
    }else{
        document.getElementById("message").innerHTML = "Form submitted successfully";
    }
}

//NOTES: .match(), .length are known as string methods. We have a lot of others.