//Create a function to check if a student is eligible for admission
function checkAdmission(){
    //Get the value from the html input and store it in a variable called jambscore
    var jambscore = document.getElementById("jambscore").value;
    
    //Write the condition to check if the score is between 180 and 400, if yes then student is eligible for admission
    if(jambscore >= 180 && jambscore <= 400){
        document.getElementById("message").innerHTML = "Congratulations! You are eligible for admission into the university";
    //Write the condition to check if the score is below 180 but greater than 0, if yes then student is not eligible for admission
    }else if  (jambscore < 180 && jambscore > 0){
        document.getElementById("message").innerHTML = "We are sorry, You are NOT eligible for admission into the university, you scored below 180";
    //Write the condition to check if the score is above 400, if yes then student is asked to enter a valid score
    }else if(jambscore > 400){
        document.getElementById("message").innerHTML = "Please enter a valid number, you cannot score above 400";
    //Write the condition to check if the score is 0, if yes then student is asked to enter a valid score
    }else if(jambscore === "0"){
        document.getElementById("message").innerHTML = "Please enter your a valid number, 0 is not valid";
    //Write the condition to check if the score is empty, if yes then student is told that input is required
    }else if (jambscore === ""){
        document.getElementById("message").innerHTML = "Please input is required";
    //Write the condition to check if the score is negative, if yes then student is told that You cannot have a negative value
    }else if(jambscore < 0){
        document.getElementById("message").innerHTML = "You cannot have a negative value";
    //If there exists any other undefined condition not captured in the conditional statement, then the else statement would be executed
    }else{
        document.getElementById("message").innerHTML = "Error";
    }
}