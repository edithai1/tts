const dropDown = document.getElementById("dropdown");
let dropDownOptions = document.getElementById("dropdown-options");
dropDown.addEventListener("mouseenter", () => {
    dropDownOptions.style.display = "block";
})
dropDown.addEventListener("mouseleave", () => {
    dropDownOptions.style.display = "none";
})