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
  
    //Get the lga-container div tag/element
    const lgaContainer = document.getElementById("lga-container");
    // Clear previous content when another state is selected
    lgaContainer.innerHTML = "";

    //Check if the lga exists
    if (lgas.length === 0) {
        //Display a message by creating a p tag/element, setting the text content and appending it to the lga container div tag/element
        //Create a p tag dynamically using JS
        const message = document.createElement("p");
        //Set the content for the p tag/element created (note: innterHTML or textContent can be used to set a content of an element/tag)
        message.textContent = "No LGA found for the selected state.";
        //Append the p tag/element to the lga container div tag/element
        lgaContainer.appendChild(message);
    }else {
        //Create a ul tag/element dynamically using JS
        const list = document.createElement("ul");
        
        //Loop through lgas and create an li tag/element for each
        for (const lga of lgas) {
            //Create a li tag/element dynamically using JS
            const listItem = document.createElement("li");
            //Set the text content for the li tag/element. Text content would be the iteration of each lga
            listItem.textContent = lga;
            //Append the li tag/element to the ul list created above
            list.appendChild(listItem);
        }
        //Append the ul list to the lga container div tag/element
        lgaContainer.appendChild(list);
    }
}