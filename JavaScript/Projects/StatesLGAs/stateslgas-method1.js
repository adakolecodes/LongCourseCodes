/*
STEPS/OBJECTIVES
1. Create a select in html document with options of different states
2. Create a paragraph tag in html document to display a message whenever a state that does not exists in our data set is selected
3. Create another paragraph tag in html document to display the LGAs for that state.
4. Create a javascript file and link it to your html document
5. In your javascript file declare the function that would get the LGAs by the parameter of state
6. Define the LGA data. LGAs can be stored in an object and accessed by properties of the state name
7. Write a conditional statement to check if the state selected exists in the LGA data
8. If the state selected exists in the LGA data then display the LGAs for that state in the paragraph tag with the id of 'displayLGAs'
9. If the state selected does not exists in the LGA data then show a message in the paragraph tag with the id of 'message' to indicate that.
10. Call the function on the html page in the onchange event of the select element, so when a state is selected the function is triggered and the LGAs for that sate is displayed in the paragraph tag with an id of 'displayLGAs'

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

    // Check if the state exists in the lga data
    if (state in lgaData) {
        document.getElementById("displayLGAs").innerHTML = lgaData[state];
        //Clear the content of the message paragraph
        document.getElementById("message").innerHTML = "";
    }else {
        //If no LGA exist for the selected state then display message to indicate (note: both innterHTML or textContent can be used to set a content of an element/tag)
        document.getElementById("message").innerHTML = "No LGA found for the selected state.";
        //Clear the content of the displayLGAs paragraph
        document.getElementById("displayLGAs").innerHTML = "";
    }
}