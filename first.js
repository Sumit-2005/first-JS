// First Exercise
const product = {
    title: "ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);

const profile ={
    username: "ShradhaKhapra",
    followers: 123,
    following: 4,
    isFollow: false
};

console.log(profile);


//Second Exercise
// let num =prompt("Enter a Number:")

// if(num%5 === 0){
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

let marks = prompt("Enter your marks (0-100):")
let grade;
if(marks>=90 && marks<=100) {
    grade = "A";
} else if(marks>=70 && marks<=89) {
    grade = "B";
} else if(marks>=60 && marks<=69) {
    grade = "C";
} else if(marks>=50 && marks<=59) {
    grade = "D";
} else {
    grade = "F";
}

console.log(grade);