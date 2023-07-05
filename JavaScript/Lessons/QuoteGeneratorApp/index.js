//READ DOCUMENTATION - Using async await with axios: https://rapidapi.com/guides/axios-async-await

const apiUrl = "https://api.quotable.io/random";

//When using async await with axios, we do not need the .then() method as a way of returning the promise.
//To handle errors we use the try and catch block
async function getQuote(){
    try{
        //Set button to show loading and disabled when clicked
        document.getElementById("btn").innerHTML = "Loading...";
        document.getElementById("btn").disabled = true;

        const response = await axios.get(apiUrl);
        const data = response.data;
        console.log(data);

        document.getElementById("tags").innerHTML = data.tags;
        document.getElementById("content").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
        document.getElementById("error").innerHTML = "";

        //After quotes have been loaded, enable button and show Generate
        document.getElementById("btn").innerHTML = "Generate";
        document.getElementById("btn").disabled = false;
    }catch(error){
        console.log(error);
        document.getElementById("error").innerHTML = error;
    }
}