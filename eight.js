let btn = document.querySelector(".modebtn");
let screen = document.querySelector("body");
let mode = "light";

btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        screen.style.backgroundColor = "black";
    } else {
        mode = "light";
        screen.style.backgroundColor = "white";
    }
        
    console.log(mode);
})