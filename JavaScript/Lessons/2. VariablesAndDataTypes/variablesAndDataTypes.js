/*
VARIABLES
A variable is a container used to store a value
*/

//Lets create a variable called fruit and store the value of orange in it
var fruit = "mango";

//'var' is called a keyword, 'fruit' is called the variable name while 'orange' is called the value
//To view the value of the variable name called 'fruit' we will do the following below
console.log(fruit); //The output of this would be 'orange'

/*
KEYWORDS USED IN DEFINING A VARIABLE:
1. var, 2. const, 3. let
var is a keyword used to declare a variable of which it's value can be changed
const is a keyword used to declare a variable of which it's value cannot be changed
let is a keyword used to declare a variable of which it's value can be changed
*/

//Example
var color = "green"; //Value can be changed
const car = "Toyota"; //Value cannot be changed
let name = "John"; //Value can be changed

//Let's change the value of fruit variable to demonstrate the mutability of var variables
color = "pink";
//Let's now see the new value of color
console.log(color); //The output will be pink and NOT green, because we have changed the value and reassigned a new value of pink to the color variable

//How about we try to change the value of car variable? We will get an error because variables defined using the const keyword cannot be mutated/changed
//However we can mutate the value of name variable
//Note: When mutating the value of a variable, you don't make use of the keyword the second time. Notice the color variable, when it was beign reassigned, we did not use the var keyword the second time

/*
RULES FOR DEFINING A VARIABLE
1. When defining a variable, 
- do not use UPPERCASE, 
- do not start with Capital letters, 
- do not start with numbers,
- do not give spacing
*/

/*
DATATYPES
Datatypes are used to store values of different types, they signify variables of different data types
The three major data types in Javascript (JS) are
1. strings
2. numbers
3. boolean
Others include
4. arrays
6. objects
*/

//Strings: They are data wrapped in quotation ("")
var state = "Benue"; //This is a string datatype, because it's value is wrapped within a quotation mark

//Numbers: They are data without quotation
var age = 13;

//Boolean: They are data that their values are either true or false
var isMale = true;
var isRaining = false;

//STRING CONCATINATION
//We can concatenate strings using the '+' sign
console.log(name + " is a boy and he is " + age + " years old"); //The output will be 'John is a boy and he is 13 years old'. name and age are the variables.

//STRING INTERPOLATION
//We can interpolate strings using the `` sign
console.log(`${name} is a boy and he is ${age} years old`); //The output will be 'John is a boy and he is 13 years old'. name and age are the variables.

//ARITHETIC OPERATORS
var x = 10;
var y = 15;
var z = x + y; 
console.log(z); //The output will be 25 because 10 + 15 = 25. 25 is stored in the variable z.