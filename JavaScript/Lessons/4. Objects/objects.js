//OBJECTS
//An object is a data structure that allows you to store and organize multiple values as key-value pairs
//Objects in JavaScript can be thought of as containers that hold related data and functionality. The data is stored in properties

const person = {
    name: "John Doe",
    age: 40,
    isEmployed: true,
    hobbies: ["reading", "playing guitar", "hiking"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

/*
In the example above, person is an object that represents a person. 
It has several properties such as name, age, isEmployed, and hobbies. 
The greet property is a function that can be called to display a greeting message.

You can access the properties of an object using dot notation (object.property) or bracket notation (object['property']). For example:
*/
console.log(person.name); // Outputs: John Doe
console.log(person['age']); // Outputs: 30
person.greet(); // Outputs: Hello, my name is John Doe



//COMPLEX OBJECTS
//In a complex object, we can have an object within an object and so on
//Example
const person2 = {
    name: "John Doe",
    age: 30,
    address: { //An object within an object
        street: "123 Main St",
        city: "Exampleville",
        country: "Exampleland"
    },
    hobbies: ["reading", "playing guitar", "hiking"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

/*
In the example above, the person object now has an address property, which itself is an object containing street, city, and country properties. 
This nested object structure allows you to represent more complex data, such as an address associated with a person.

You can access the properties of the nested object using dot notation or bracket notation, just like before:
*/
console.log(person2.address.street); // Outputs: 123 Main St
console.log(person2.address['city']); // Outputs: Exampleville



//How to check if a property exists in an object
person2.hasOwnProperty("age") //This returns true, because age property exists in the person2 object. To see the output we console log person2.hasOwnProperty("age")
//OR
if("age" in person2){
    console.log("Yes it exists")
}else{
    console.log("No it does not exist")
}