// First Exercise

// const product = {
//     title: "ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270
// };

// console.log(product);

// const profile ={
//     username: "ShradhaKhapra",
//     followers: 123,
//     following: 4,
//     isFollow: false
// };

// console.log(profile);


//Second Exercise

// let num =prompt("Enter a Number:")

// if(num%5 === 0){
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

// let marks = prompt("Enter your marks (0-100):")
// let grade;
// if(marks>=90 && marks<=100) {
//     grade = "A";
// } else if(marks>=70 && marks<=89) {
//     grade = "B";
// } else if(marks>=60 && marks<=69) {
//     grade = "C";
// } else if(marks>=50 && marks<=59) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// console.log(grade);




//Third Exercise

// let fullName = prompt("Enter your full name (without spaces):");
// let username ="@"+ fullName + fullName.length;
// console.log(username);


//Fourth Exercise

// let marks = [85, 97, 44, 37, 76, 60];
// let x = 0;

// for(let i=0; i<marks.length; i++) {
//     x = x + marks[i];
// }

// let y = x/marks.length;
// console.log(y);


// let items = [250, 645, 300, 900, 50];
// let offer = 0.1;

// for(let i=0; i<items.length; i++) {
//     items[i] = items[i] - items[i]*offer;
// }

// console.log(items);


let comp = ["Bloomberg", "Micosoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comp.unshift());

comp.splice(2, 1, "OLA");
console.log(comp);

comp.push("Amazon");
console.log(comp);

