$(window).ready(function(){
    alert("It is working");
});

var testIdJs = document.getElementById("testId")
var testClassJs = document.getElementsByClassName("testClass")
var testh1 = document.getElementsByClassName("h1");

console.log(testIdJs)
console.log(testClassJs)
console.log(testh1)

console.log($('h1'))
console.log($('testClass'))
console.log($('#testId'))

console.log($('a.test:first'))
console.log($('tr:odd'))
console.log($('tr:even'))
console.log($('#form:input'))


$('li').click(function(){
    alert("clicked")
})

//keydown
//keypress
//keyup
//mousover
//mousout
//focus
//resize

$('#btn').click(function(){
    console.log($('#h1').text())
    $('#h1').text("New text")
    $('#h1').append("added")
})