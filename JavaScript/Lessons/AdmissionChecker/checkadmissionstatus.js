function checkAdmission(){
    var jambscore = document.getElementById("jambscore").value;
    
    if(jambscore >= 180 && jambscore <= 400){
        document.getElementById("message").innerHTML = "Congratulations! You are eligible for admission into the university";
    }else if  (jambscore < 180 && jambscore > 0){
        document.getElementById("message").innerHTML = "We are sorry, You are NOT eligible for admission into the university, you scored below 180";
    }else if(jambscore > 400){
        document.getElementById("message").innerHTML = "Please enter a valid number, you cannot score above 400";
    }else if(jambscore === "0"){
        document.getElementById("message").innerHTML = "Please enter your a valid number, 0 is not valid";
    }else if (jambscore === ""){
        document.getElementById("message").innerHTML = "Please input is required";
    }else if(jambscore < 0){
        document.getElementById("message").innerHTML = "You cannot have a negative value";
    }else{
        document.getElementById("message").innerHTML = "Error";
    }
}