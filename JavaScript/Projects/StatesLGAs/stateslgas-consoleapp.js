//Function to be used on console
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
        return lgaData[state];
    } else {
        return []; // Empty array if the country is not found
    }
}

console.log(getLGAsByState("Benue"));