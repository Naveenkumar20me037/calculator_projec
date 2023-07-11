// function add(){
//     document.getElementById("b1").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a + b;
//     document.write(z) 
// }

// function sub(){
//     document.getElementById("b2").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a - b;
//     document.write(z)
// }

// function mul(){
//     document.getElementById("b3").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a * b;
//     document.write(z)
// }

// function div(){
//     document.getElementById("b4").innerHTML=z;
//     let a=5;
//     var b=6;
//     var z = a / b;
//     document.write(z)
// }

function add(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a + b;
    document.getElementById("button1").innerHTML =z;
}

function sub(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a - b;
    document.getElementById("button2").innerHTML =z;
}

function mul(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a * b;
    document.getElementById("button3").innerHTML =z;
}

function div(){
    
    let a= parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z = a / b;
    document.getElementById("button4").innerHTML =z;
}