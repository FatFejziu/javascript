// function sum(){
//     alert("test");
// }

// sum()

function sum(number1, number2){
    return number1 + number2;
}

sum();
console.log(sum(5,10))
console.log(sum(5,11))
console.log(sum(5,50))
console.log(sum(60,10))
console.log(sum(52,10))
console.log(sum(25,10))
console.log(sum(35,10))

function toC(fr){
    return ( fr - 32) * 5/9
}

console.log(toC(32))

// var arrowFunction = () => alert("Hello World");

var arrowFunction = () => alert(`Hello ${name}`);

arrowFunction("Filan Fisteku");


function dsFunction(){
    var localVar = "Digital School"
    alert(localVar)
}
// console.log(localVar)
dsFunction();

function mintosec(min){
    return (min * 60)
}
console.log(mintosec(6))

function Surface(h,b){
    return (h*b) *0.5
}

console.log(Surface(10,5))