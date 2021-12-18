// axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

// .then(res => {
//     console.log(res.data); 
//     document.getElementById("title").innerHTML = res.data[0].productTitle; 
//     document.getElementById("price").innerHTML = "Price: N" + res.data[0].productPrice;
//     document.getElementById("description").innerHTML = res.data[0].productDescription;
//     document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[0].productImage;


//     document.getElementById("title2").innerHTML = res.data[1].productTitle; 
//     document.getElementById("price2").innerHTML = "Price: N" + res.data[1].productPrice;
//     document.getElementById("description2").innerHTML = res.data[1].productDescription;
//     document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[1].productImage;


//     document.getElementById("title3").innerHTML = res.data[2].productTitle; 
//     document.getElementById("price3").innerHTML = "Price: N" + res.data[2].productPrice;
//     document.getElementById("description3").innerHTML = res.data[2].productDescription;
//     document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + res.data[2].productImage;
//         })
// .then(err => console.log(err))







async function getTrees(){
    try {
        let trees = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

        document.getElementById("title").innerHTML = trees.data[0].productTitle; 
        document.getElementById("price").innerHTML = "Price: N" + trees.data[0].productPrice;
        document.getElementById("description").innerHTML = trees.data[0].productDescription;
        document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[0].productImage;


        document.getElementById("title2").innerHTML = trees.data[1].productTitle; 
        document.getElementById("price2").innerHTML = "Price: N" + trees.data[1].productPrice;
        document.getElementById("description2").innerHTML = trees.data[1].productDescription;
        document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[1].productImage;


        document.getElementById("title3").innerHTML = trees.data[2].productTitle; 
        document.getElementById("price3").innerHTML = "Price: N" + trees.data[2].productPrice;
        document.getElementById("description3").innerHTML = trees.data[2].productDescription;
        document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[2].productImage;
    } catch (err) {
        console.error(err)
    }
}

getTrees()