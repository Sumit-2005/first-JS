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

