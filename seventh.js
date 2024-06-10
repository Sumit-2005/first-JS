// Q1
let btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.style.color = "white";
btn.style.backgroundColor= "red";
document.querySelector("body").prepend(btn);

// Q2
let p = document.querySelector("p");
p = p.classList.add("newClass");