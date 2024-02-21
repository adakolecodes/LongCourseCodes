//LOOPS
/*
In JavaScript, loops are used to repeatedly execute a block of code until a certain condition is met. 
They provide a way to automate repetitive tasks and iterate over collections of data.

There are different types of loops in JavaScript, but the most commonly used ones are the for loop and the while loop:
*/




//1. For Loop:
//A for loop is used to repeat a block of code for a specific number of times. 
//It has three parts: initialization, condition, and increment/decrement.
// for (initialization; condition; increment/decrement) {
//     // Code to be executed in each iteration
// }
//Example: Printing numbers from 1 to 5 using a for loop.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//In this example, the loop initializes i with 1, continues as long as i is less than or equal to 5, and increments i by 1 in each iteration. 
//The loop prints the numbers 1, 2, 3, 4, and 5.

//Example: Printing out even numbers using for loop
for(let i = 2; i <= 10; i+=2){//this iterates from 2 to 10 with a step of 2
    console.log(i);
}
//Example: Printing out odd numbers using for loop
for(let i = 3; i <= 12; i+=3){//this iterates from 3 to 12 with a step of 3
    console.log(i);
}
//Example: FizzBuzz
for(let x = 2; x <= 20; x++){
    if(x % 2 == 0 && x % 3 == 0){
        console.log(x + "FizzBuzz")
    }if(x % 2 == 0){
        console.log(x + "Fizz")
    }else if(x % 3 == 0){
        console.log(x + "Buzz")
    }else{
        console.log(x)
    }
}




//2. While Loop:
//A while loop repeats a block of code as long as a specified condition remains true.
while (condition) {
    // Code to be executed in each iteration
}
//Example: Printing numbers from 1 to 5 using a while loop.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//In this example, the loop continues executing the code block as long as i is less than or equal to 5. 
//It starts with i as 1, prints the value of i, increments i by 1, and repeats the process until i becomes 6. 
//The loop prints the numbers 1, 2, 3, 4, and 5.




//3. Do-While Loop:
//A do-while loop is similar to a while loop, but the condition is checked after executing the code block. 
//This ensures that the code block is executed at least once.
do {
    // Code to be executed in each iteration
} while (condition);
//Example: Printing numbers from 1 to 5 using a do-while loop.
let y = 1;
do {
    console.log(y);
    y++;
} while (i <= 5);
//In this example, the code block is executed first, printing the value of i, then i is incremented by 1. 
//The loop continues as long as i is less than or equal to 5. The loop prints the numbers 1, 2, 3, 4, and 5.



