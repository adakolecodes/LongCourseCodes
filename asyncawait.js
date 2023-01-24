const btnEl = document.getElementById("btn");
// const btn2El = document.getElementById("btn2");

const apiUrl = "https://api.quotable.io/random";

async function getQuote(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
}



// const apiUrl2 = "https://api.api-ninjas.com/v1/jokes";
// const apiKey = "251cPASuaW6Dtf15tkjm7A==gM3zZh2FsK1b5m6m";

// const options = {
//     method: "GET",
//     headers: {
//         "X-Api-Key": apiKey,
//     }
// }

// async function getJoke(){
//     const response = await fetch(apiUrl2, options);
//     const data = await response.json();
//     console.log(data);
// }

//Using .then here gives us a promise, async await is another way of doing promises which was demonstrated above
// var getQuote = () => {
//     fetch(apiUrl)
//     .then(response => {return response.json()})
//     .then(responseData => {console.log(responseData)})
// }

btnEl.addEventListener("click", getQuote);
// btn2El.addEventListener("click", getJoke);