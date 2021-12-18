async function showUsers(){
    try {
        let getInfo = await axios.get('https://jsonplaceholder.typicode.com/users')

        document.getElementById("name").innerHTML = getInfo.data[0].name; 
        document.getElementById("username").innerHTML = getInfo.data[0].username; 
        document.getElementById("email").innerHTML = getInfo.data[0].email; 
        document.getElementById("address-street").innerHTML = getInfo.data[0].address.street; 
        document.getElementById("address-suite").innerHTML = getInfo.data[0].address.suite; 
        document.getElementById("address-city").innerHTML = getInfo.data[0].address.city; 
        document.getElementById("address-zipcode").innerHTML = getInfo.data[0].address.zipcode; 
        document.getElementById("address-geo-lat").innerHTML = getInfo.data[0].address.geo.lat; 
        document.getElementById("address-geo-lng").innerHTML = getInfo.data[0].address.geo.lng; 
        document.getElementById("phone").innerHTML = getInfo.data[0].phone; 
        document.getElementById("website").innerHTML = getInfo.data[0].website; 
        document.getElementById("company-name").innerHTML = getInfo.data[0].company.name; 
        document.getElementById("company-catchPhrase").innerHTML = getInfo.data[0].company.catchPhrase; 
        document.getElementById("company-bs").innerHTML = getInfo.data[0].company.bs; 
    } catch (err){
        console.error(err)
    }
}

showUsers()