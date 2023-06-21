// async function postTrees(){
//     try {
//         let trees = await axios.post('https://tbhpwebdevapi.azurewebsites.net/api/Order/simple/save/usingFormData', {
//             id: 1,
//             clientName: 'My plant',
//             qty: '200',
//             productName: 'Its fine',
//             productPrice: 'pork'
//         })
//         console.log(trees.data)
        
//     } catch (err){
//         console.error(err)
//     }
// }
// postTrees()

document.getElementById("showtable").style.visibility = "hidden";
function addTrees(){
    //Get html inputs
    var id = document.getElementById("id").value;
    var nameOfClient = document.getElementById("clientName").value;
    var nameOfProduct = document.getElementById("productName").value;
    var quantity = document.getElementById("qty").value;
    var price = document.getElementById("productPrice").value;

    axios.post('https://tbhpwebdevapi.azurewebsites.net/api/Order/simple/save/usingJson', {
        id: Number(id), 
        clientName: nameOfClient, 
        qty: Number(quantity), 
        productName: nameOfProduct, 
        productPrice: Number(price)
    })
    .then(res => {
        document.getElementById("showtable").style.visibility = "visible";
        console.log(res.data)
        document.getElementById("name_client").innerHTML = res.data.clientName; 
        document.getElementById("name_product").innerHTML = res.data.productName;
        document.getElementById("quantity").innerHTML = res.data.qty;
        document.getElementById("price_product").innerHTML = res.data.productPrice;
        // document.getElementById("productPrice").innerHTML = res.data[1].productPrice;
    })
    .catch(err => console.log(err))
}