var x = 5;

if(x < 2){
    console.log("x value is grater than two");
} else{
    console.log("x value is less than two");
}

var input =document.getElementById("input_id")
var button =document.getElementById("btn_id")
var text=document.getElementById("text_id")

button.onclick = function(){
    text.innerHTML=input.value
}




var input_1= document.getElementById("input_1")
var input_2= document.getElementById("input_2")
var cal = document.getElementById("cal")
var ans = document.getElementById("ans")


cal.onclick = function(){
    ans.innerHTML = input_1.value +input_2.value
}