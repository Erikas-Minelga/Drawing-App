const size_elem = document.querySelector("#size");
const upBtn = document.querySelector("#size-up");
const downBtn = document.querySelector("#size-down");

//Have to manually dispatch the change event when clicking the custom arrows
const changeEvent = new Event("change");

//Ensure there is always a value in the number field
window.addEventListener("load", e => { size_elem.value = "5"; });

upBtn.addEventListener("click", e => {size_elem.stepUp(); size_elem.dispatchEvent(changeEvent);});
downBtn.addEventListener("click", e => {size_elem.stepDown(); size_elem.dispatchEvent(changeEvent);});