var letters = ['a','b','c','d','e'];


for (var i = 0; i<letters,length ; i++){
    console.log(letters[i])
}

var person = {firstName: "John", lastName: "Doe", age:25 };
var x;
for(x in person){
    console.log(person[x])
}

var names = ["Rinis","Aurela","Erblina","Jora"];
var x;

for(x of names){
    document.write(x+"<br>")
}


var txt ="JavaScript";
var x;

for(x of txt){
    document.write(x+"<br>")
}



var i = 0;

do{
    console.log(i)
    i+=1;
}while(i < 5);

1=0;

while(i<5){
    console.log(i);
    i++;
}