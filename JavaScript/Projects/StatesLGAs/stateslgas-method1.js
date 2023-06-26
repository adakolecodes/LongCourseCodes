/*
STEPS/OBJECTIVES
1. Create a select in html document with options of different states
2. Create a paragraph tag in html document to display a message whenever a state that does not exists in our data set is selected
3. Create another paragraph tag in html document to display the list of LGAs for that state.
4. Create a javascript file and link it to your html document
5. In your javascript file declare the function that would get the list of LGAs
6. Define the LGA data. LGAs can be stored in an object and accessed by properties of the state name
7. Create a variable to hold the list of LGAs for a selected state
8. Write a conditional statement to check if the LGAs for the selected state exists or not
9. If the LGAs for the selected state does not exists then show a message to indicate that.
10. If the LGAs for the selected state exists then display the list of LGAs for that state
11. Call the function on the html page in the onchange event of the select element, so when a state is selected the function is triggered and the list of LGAs for that sate is displayed in the paragraph tag with an id of displayLGAs

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

    //Get the lga data for the selected state and store in the lgas variable
    const lgas = lgaData[state] || [];

    //Check if the lga exists
    if (lgas == "") {
        //If no LGA exist for the selected state then display message to indicate (note: both innterHTML or textContent can be used to set a content of an element/tag)
        document.getElementById("message").innerHTML = "No LGA found for the selected state.";
        //Clear the content of the displayLGAs paragraph
        document.getElementById("displayLGAs").innerHTML = "";
    }else {
        document.getElementById("displayLGAs").innerHTML = lgas;
        //Clear the content of the message paragraph
        document.getElementById("message").innerHTML = "";
    }
}