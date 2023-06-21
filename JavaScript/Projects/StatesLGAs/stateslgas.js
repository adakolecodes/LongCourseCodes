function getLGAsByState(state) {
    // Define the state data
    const lgaData = {
        Benue: ["Markurdi", "Otukpo", "APA", "Ugbokolo"],
        Taraba: ["Jalingo", "Wukari", "Gembu", "Takum"],
        Abuja: ["FCT", "Gwags", "Kuje", "Lugbe"]
        // Add more countries and states as needed
    };
  
    // Check if the state exists in the lga data
    if (state in lgaData) {
        return lgaData[state];
    } else {
        return []; // Empty array if the country is not found
    }
}

console.log(getLGAsByState("Benue"));