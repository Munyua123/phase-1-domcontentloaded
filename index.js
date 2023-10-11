// Your code goes here
addEventListener("DOMContentLoaded", (e) => {
const changeText = document.querySelector("p").textContent = "This is really cool!"
    console.log("The DOM has loaded");
   e.target.changeText
})

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
