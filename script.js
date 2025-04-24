let nameInputElement = document.getElementById("name-input");
let nameOutputElement = document.getElementById("name-output");
nameInputElement.addEventListener("submit", nameInputEventHandler);

function nameInputEventHandler(event) {
    event.preventDefault();
nameOutputElement.innerHTML = `Hello there ${event.target["name-output"].value}`
event.target.reset();
}