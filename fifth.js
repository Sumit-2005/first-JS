//fifth exercise

function countVowel() {
    let x= prompt("Enter a String:");
    let c = 0;
    for(let i of x) {
        if(
            i === "a" || 
            i === "e" || 
            i === "i" || 
            i === "o" || 
            i === "u")
        c++;
    }
    console.log(c)
}

let countv = (msg) => {
    let c = 0;
    for(let i of msg) {
        if(
            i === "a" ||
            i === "e" ||
            i === "i" ||
            i === "o" ||
            i === "u"
        )
        c++;
    }
    console.log(c);
}



//  let arr = [1,2,3,4,5,6]

//  arr.forEach((val) => {
//     console.log(val**2);
//  });


// let arr = [87,93,42,99,98,92,42,54,66,71];

// let toppr = arr.filter((val) => {
//     return val>=90;
// });

// console.log(toppr);



let n = prompt("Enter a number :");
let arr =[]

for(i=1; i<=n; i++) {
    arr[i-1] = i;
}
console.log(arr);


let sum = arr.reduce((prev, curr) => {
    return prev+curr;
});
console.log(sum);

let prod =arr.reduce((prev , curr) => {
    return prev*curr;
})
console.log(prod)