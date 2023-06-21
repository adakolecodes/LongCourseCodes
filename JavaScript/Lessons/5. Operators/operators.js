//Conditions and Comparison Operators
//Conditions and Comparison Operators are used to compare values. These operators include the following
/*
1. Equivalence operator (==, ===)
2. "Not Equal to" operator (!=)
3. "Logical AND" operator (&&)
4. "Logical OR" operator (||)
5. Less than and greater than operators (<, >)
6. "NOT" operator (!)
*/

//1. Equivalence operator (==, ===)
var password = "1234"
var confirmpassword = 1234
console.log(password == confirmpassword) //true
console.log(password === confirmpassword) //false

/*Explanation
From the example above, we can see that the values are equal (1234). However, they are of different data types (password is a string while confirmpassword is a number).
The == operator checks if the two values are equal. (== compares only value. The value of password ("1234") is same as confirmpassword (1234))
The === operator checks if the two values are equal AND if they are of the same data type. (=== compares both values AND datatypes. The value of password ("1234") is same as confirmpassword (1234) however the data type is different, therefore the comparison will return false.)
*/



//2. "Not Equal to" operator (!=)
var password = "1234"
var confirmpassword = 1234
console.log(password != confirmpassword) //false
console.log(password !== confirmpassword) //true

/*Explanation
From the example above, we can see that the values are equal (1234). However, they are of different data types (password is a string while confirmpassword is a number).
!= checks if the two values are not equal. (!= compares only value. The value of password ("1234") is the same as confirmpassword (1234), therefore the comparison will return false)
!== checks if the two values are not equal AND the data type are not the same (!== compares both values AND datatypes. The value of password ("1234") is the same as confirmpassword (1234) however the data type is different, therefore the comparison will return true)
*/



//3. "Logical AND" operator (&&)
/*
Logical AND Table
true && true = true
true && false = false
false && true = false
false && false = false
*/
var idcard = true
var facemask = false
console.log(idcard && facemask) //false

var password = "1234"
var confirmpassword = 1234
var email = "johndoe@gmail.com"
var confirmemail = "janedoe@gmail.com"
console.log(password == confirmpassword && email == confirmemail) //false

//The first condition is true, but the second condition is false, therefore the result is false because true && false = false



//4. "Logical OR" operator (||)
/*
Logical OR Table
true || true = true
true || false = true
false || true = true
false || false = false
*/
var idcard = true
var facemask = false
console.log(idcard || facemask) //true

var password = "1234"
var confirmpassword = 1234
var email = "johndoe@gmail.com"
var confirmemail = "janedoe@gmail.com"
console.log(password == confirmpassword || email == confirmemail) //true

//The first condition is true, and the second condition is false, therefore the result is true because true || false = true



//5. Less than and greater than operators (<, >)
var cutoff = 180
var jambscore = 200
console.log(cutoff > jambscore); //false
console.log(cutoff < jambscore); //true



//6. "NOT" operator (!)
//The NOT operator is used to invert the result of a logical operator. That is, it gives you the opposite of what the result would be. 
//If the result was meant to be true and you use the ! operator, the result will be false.
var raining = true
console.log(!raining); //false
