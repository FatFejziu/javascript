// // var pc = {
// //     name: "Lenovo",
// //     model: "I fundit",
// //     GPU: "Nvidia",
// //     CPU: "Intel i7"
// // }

// // console.log(pc.name)
// // console.log(pc['name'])

// var computer = new Object;

// computer.name = "Lenovo";
// computer.CPU = "Intel core i7";
// computer.GPU= "GeForce"
// computer.RAM = "16GB";

// computer.type = function(){
//     return this.name + "," + this.CPU + "," + this.RAM + "," + this.GPU;
// }

// console.log(computer.type())
// console.log(computer.name)
// console.log(computer['name'])

// var kerri = {
//     emri: "Mercedes",
//     modeli: "CLS",
//     ngjyra: "e zez",
//     viti: 2025,
//     kilometrat: 0,
//     startEngine: function(){
//         console.log("Vroooooooom!!!!");
//     },
//     get getkilometrat(){
//         return this.kilometrat
//     },

//     set setkilometrat(km){
//         this.kilometrat = km;
//     }
// }

// console.log(kerri.getkilometrat)

// kerri.setkilometrat = 1000;

// console.log(kerri.getkilometrat);


function Kerri(emri,modeli,ngjyra,viti,kilometrat){
    this.emri = emri;
    this.modeli = modeli;
    this.ngjyra = ngjyra;
    this.viti = viti;
    this.kilometrat = kilometrat;
}

var kerri1 = new Kerri("Mercedes", "Sclass", "zez", "0")