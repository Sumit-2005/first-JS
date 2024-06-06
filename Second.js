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



 let arr = [1,2,3,4,5,6]

 arr.forEach((val) => {
    console.log(val**2);
 });

