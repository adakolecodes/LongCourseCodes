//Function to be used on HTML
function getLGAsByState(state) {
    // Define the LGA data
    const lgaData = {
        Benue: ["Markurdi", "Otukpo", "APA", "Ugbokolo"],
        Taraba: ["Jalingo", "Wukari", "Gembu", "Takum"],
        Abuja: ["FCT", "Gwags", "Kuje", "Lugbe"]
        // Add more states and LGAs as needed
    };

    //Get the lga data for the specific state parsed as an arguement and store in the lgas variable
    const lgas = lgaData[state] || [];
  
    //Get the p tag by it's id for displaying message
    const message = document.getElementById("message");
    // Clear the p tag content when another state is selected
    message.innerHTML = "";

    //Get the ul tag by it's id for displaying lists of LGAs
    const list = document.getElementById("list");
    // Clear the ul content when another state is selected
    list.innerHTML = "";

    //Check if the lga exists
    if (lgas.length === 0) {
        //If no state exists for the arguement parsed then display message (note: both innterHTML or textContent can be used to set a content of an element/tag)
        message.innerHTML = "No LGA found for the selected state.";
    }else {
        //Loop through lgas and create an li tag/element for each
        for (const lga of lgas) {
            //Create a li tag/element dynamically using JS to display each LGAs.
            const listItem = document.createElement("li");
            //Set the content for the li tag/element. Text content would be the iteration of each lga
            listItem.innerHTML = lga;
            //Append the li tag/element to the ul list above
            list.appendChild(listItem);
        }
    }
}