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
    axios.post('https://tbhpwebdevapi.azurewebsites.net/api/Order/simple/save/usingJson', {
        id: 1, 
        clientName: 'My plant', 
        qty: 2, 
        productName: 'Its fine', 
        productPrice: 200
    })
    .then(res => {
        document.getElementById("showtable").style.visibility = "visible";
        console.log(res.data)
        document.getElementById("clientName").innerHTML = res.data[1].clientName; 
        document.getElementById("productName").innerHTML = res.data[1].productName;
        document.getElementById("qty").innerHTML = res.data[1].qty;
        document.getElementById("productPrice").innerHTML = res.data[1].productPrice;
    })
    .catch(err => console.log(err))
}