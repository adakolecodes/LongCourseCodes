function add(){
    var box1 = document.getElementById("box1").value;
    var box2 = document.getElementById("box2").value;
    var sum = Number(box1) + Number(box2);

    document.getElementById("answer").value = sum;
}