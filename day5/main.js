var btn = document.getElementById("btn")

console.log(btn)

btn.onclick = function(){
    console.log("hello");
    btn.setAttribute("class","test");
}