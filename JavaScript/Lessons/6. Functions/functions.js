/*
FUNCTIONS
A function can be seen as a block of code that does something. 
Rather than writing very similar lines of code multiple times, you can add them into the function and call the function as may times.

Parts of a function
1. Function keyword
2. Function name
3. Function parameters (Optional)
4. Function arguments (Optional)

Making use of a function
1. Declare the function: You first declare the function
2. Call the function: Then you call the function

Rules of a function
1. Any function you have to change the contents inside before you can reuse is a bad function. 
2. Parameters and Arguments
- A parameter represents the value an argument 
- A parameter is used when defining the function 
- An argument is used when declaring the function
3. You don't declare your function before you define it. You define before declaring
4. Whenever a parameter is used, an argument is expected 

Things to note about a function 
1. A static function returns the same value, a dynamic function returns a dynamic value based on the argument parsed 
2. Parameters are not the real value, they only represent the value of arguments which are the real value 
*/

//Examples
//Declare a function without parameters that shows a greeting message
function greet(){
    console.log('Good morning James');
}
//The 'function' before greet is the function keyword, and must be used when declaring a function
//greet is the function name (your function name can be named as anything but ensure the name is related to what the function does). A bracket must always come after the function name
//Inside the curly brackets is where you write the code you want your function to do

//Call the greet function
greet(); //Output: Good morning James
//You can call your function as many times as you wish
greet();
greet();
greet();



//Declare a function with parameters and arguments
function greet2(name){
    console.log('Good morning ' + name);
}
//Call the greet2 function and parse in an arguement
greet2("Mark"); //Output: Good morning Mark



//Declare a function with two parameters
function greet3(timesOfDay, name){
    console.log(`Good ${timesOfDay} ${name}`);
}
//Call the greet3 function and parse in the two arguement
greet3("Evening", "Abraham"); //Output: Good Evening Abraham


//Declare a function that adds two numbers together
function addNumbers(num1, num2){
    return num1 + num2;
}
//Call the addNumbers function and parse in the two arguement
console.log(addNumbers(10, 20)); //Output: 30


//ADVANCED FUNCTION
//Arrow functions and Function expressions are other ways we can write our functions other than the conventional 
//way we saw in the examples treated. These will still give the same output

//Lets create a function that adds two numbers using arrow function and function expression
//Arrow function
const addNumbers2 = (num1, num2) => {
    return num1 + num2;
}

//Function expression
const addNumbers3 = function(num1, num2){
    return num1 + num2;
}
