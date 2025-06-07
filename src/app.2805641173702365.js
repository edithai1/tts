const dropDown = document.getElementById("dropdown");
let dropDownOptions = document.getElementById("dropdown-options");
dropDown.addEventListener("mouseenter", () => {
    dropDownOptions.style.display = "block";
})
dropDown.addEventListener("mouseleave", () => {
    dropDownOptions.style.display = "none";
})
const dropDownFeatures = document.getElementById('dropdownFeature');
let dropDownOptionsFeature = document.getElementById('dropdown-optionsFeatures');
dropDownFeatures.addEventListener("mouseenter", () => {
    dropDownOptionsFeature.style.display = "block";
})
dropDownFeatures.addEventListener("mouseleave", () => {
    dropDownOptionsFeature.style.display = "none";
})
let navBar = document.querySelector('.nav');
let bodyTaf = document.querySelector('body');
const OpenBar = document.getElementById('OpenBtn').addEventListener("click", () => {
    navBar.classList.add('open')
    bodyTaf.classList.add('menu-Open')
})
const CloseBtn = document.getElementById('closeBtn').addEventListener("click", () => {
    navBar.classList.remove('open')
    bodyTaf.classList.remove('menu-Open')
})