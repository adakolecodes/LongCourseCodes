//A conditional statement in JavaScript allows you to perform different actions based on different conditions. 
//It helps your code make decisions and execute specific blocks of code depending on whether certain conditions are true or false.

//The most common conditional statement in JavaScript is the if statement, which has the following syntax:
if (condition) {
    // Code to be executed if the condition is true
}



//Here's an example to illustrate how the if statement works:
var age = 25;

if (age >= 18) {
    console.log("You are an adult.");
}
/*
In this example, we have a variable age with a value of 25. The if statement checks if the condition age >= 18 is true. 
If the condition is true (which it is in this case), the code inside the curly braces {} is executed. 
Therefore, the message "You are an adult." will be printed to the console.
*/



//You can also include an else statement to provide an alternative block of code to execute when the condition is false:
var age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
/*
In this updated example, the value of age is 15, which is less than 18. As a result, the condition age >= 18 evaluates to false. 
Therefore, the code block inside the else statement is executed, and the message "You are a minor." is printed.
*/



//You can also use multiple conditions with the else if statement to handle multiple scenarios:
var age = 30;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
/*
In this example, the code checks three conditions using the if, else if, and else statements. 
Based on the value of age, it determines whether the person is a minor, an adult, or a senior citizen.
*/

/*
Conditional statements are crucial for controlling the flow of your code based on different conditions. 
They allow you to create dynamic and flexible programs that adapt to different scenarios and make decisions based on specific conditions.
*/