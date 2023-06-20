//Hide meaning container before search
document.getElementById("meaning-container").style.display = "none";

async function getMeaning(){
    //Get value from input
    const input = document.getElementById("input").value;

    //Check if imput is empty
    if(input.length > 0){
        try{
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
            const response = await axios.get(url);
            const data = response.data[0];
            console.log(response);

            //Show meaning container when search is initiated
            document.getElementById("meaning-container").style.display = "block";
            
            document.getElementById("word").innerHTML = data.word;
            document.getElementById("definition").innerHTML = data.meanings[0].definitions[0].definition;
            document.getElementById("audio").src = data.phonetics[0].audio;

            document.getElementById("error").innerHTML = "";
        }catch(error){
            document.getElementById("error").innerHTML = error;
        }
    }else{
        document.getElementById("error").innerHTML = "Please enter a word";
    }
}