/*
STEPS/OBJECTIVES
1. Create a select in html document with options of different states
2. Create a paragraph tag in html document to display a message whenever a state that does not exists in our data set is selected
3. Create a ul tag in html document to display the list of LGAs for that state. However ul will not contain any list items, list items will be dynamicly injected in the ul tag by javascript
4. Create a javascript file and link it to your html document
5. In your javascript file declare the function that would get the list of LGAs
6. Define the LGA data. LGAs can be stored in an object and accessed by properties of the state name
7. Create a variable to hold the list of LGAs for a selected state
8. Get the html p tag and ul tag by their ids and assign a variable to them
9. Write a conditional statement to check if the LGAs for the selected state exists or not
10. If the LGAs for the selected state does not exists then show a message to indicate that
11. If the LGAs for the selected state exists then display the list of LGAs for that state by looping through the variable that holds the list of LGAs for the selected state
12. Call the function on the html page in the onchange event of the select element, so when a state is selected the function is triggered and the list of LGAs for that sate is displayed in the ul

*/

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
        document.getElementById("display").innerHTML = lgas;
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