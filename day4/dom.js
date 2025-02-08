// // var button1 = document.getElementById("btn1");
// // console.log(button1)

// // button1.onclick = function(){
// //     console.log("hello");
// // }

// var button1 = document.querySelector("button");
// var butonat = document.getElementsByClassName("butoni");
// console.log(button1)
// console.log(butonat)


// button1.onclick = function(){
//     console.log("test")
// }

// button1.addEventListener('click', function(){
//     console.log("Boni");
// });

button1.onmouseover= function(){
    console.log("ndrydhe mos u tut")
}

button1.onmouseleave= function(){
    console.log("Mos ik more ndrydhe")
}

button1.onmousewheel= function(){
    console.log("Albin Baba")
}

var button4 = document.getElementById("btn4");
var txt = document.getElementById("txt1");


button4.onclick = function(){
    txt.style.color = "red";
    txt.style.backgroundColor = "lightblue";
    txt.style.textAlign = "center";
    txt.style.fontSize = "100px";
    txt.style.padding= "20px";
}
