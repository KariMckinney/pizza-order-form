
const form = document.getElementById("form");
const orderTable = document.getElementById("table");

const fname = document.getElementById("fname");
const lname = document.getElementById("fname");
const pizzaSize = document.getElementById("pizza-size");
const pizzaTopping = document.getElementsByClassName("class");

function formClickHandler(event) {
    event.preventDefault();

const table = document.createElement("tr")
table.innerHTML = table.value
const fname = document.createElement("td")
fname.innerHTML = fname.value
const lname = document.createElement("td")
lname.innerHTML = lname.value
const pizzaSize = document.createElement("td")
pizzaSize.innerHTML = pizzaSize.value
const pizzaTopping = document.createElement("td")
pizzaTopping.innerHTML = pizzaTopping.value

table.appendChild(fname)
table.appendChild(lname)
table.appendChild(pizzaSize)
table.appendChild(pizzaTopping)

orderTable.appendChild(table)
}