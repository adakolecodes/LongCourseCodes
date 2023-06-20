const btnEl = document.getElementById("btn");
const quoteContentEl = document.getElementById("quoteContent");
const quoteAuthorEl = document.getElementById("quoteAuthor");


//QUOTES API
//USING ASYNC AWAIT ON FETCH
const apiUrl = "https://api.quotable.io/random";
// async function getQuote(){
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data.content);
//         console.log(data.author);
//     } catch (error) {
//         console.log(error);
//     }
// }

//USING JUST FETCH WITHOUT ASYNC AWAIT
// Using .then here gives us a promise, async await is another way of doing promises which was demonstrated above
// var getQuote = () => {
//     fetch(apiUrl)
//     .then(response => {return response.json()})
//     .then(response => {
//         quoteContentEl.innerHTML = response.content
//         quoteAuthorEl.innerHTML = response.author
//         // console.log(response.content)
//         // console.log(response.author)
//     })
// }


//USING AXIOS WITHOUT ASYNC AWAIT
// function getQuote(){
//     axios.get(apiUrl)
//     .then(response => {
//         quoteContentEl.innerHTML = response.data.content
//         quoteAuthorEl.innerHTML = response.data.author
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }


//USING AXIOS WITH ASYNC AWAIT
// async function getQuote(){
//     try{
//         const response = await axios.get(apiUrl)
//         const data = await response.data;
//         quoteContentEl.innerHTML = await data.content
//         quoteAuthorEl.innerHTML = await data.author
//     }catch(error){
//         console.log(error);
//     }
// }


btnEl.addEventListener("click", getQuote);















const btn2El = document.getElementById("btn2");

//JOKES API
const apiUrl2 = "https://api.api-ninjas.com/v1/jokes";
const apiKey = "251cPASuaW6Dtf15tkjm7A==gM3zZh2FsK1b5m6m";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}
async function getJoke(){
    try {
        const response = await fetch(apiUrl2, options);
        const data = await response.json();
        console.log(data[0].joke);
    } catch (error) {
        console.log(error);
    }
}



btn2El.addEventListener("click", getJoke);