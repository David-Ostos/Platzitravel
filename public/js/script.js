const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonSm = document.querySelector("#toggle-sm");

toggleButton.addEventListener("click",() => toggleDarkMode());
toggleButtonSm.addEventListener("click",() => toggleDarkMode());

const toggleDarkMode = () =>{
  htmlElement.classList.toggle("dark")
}