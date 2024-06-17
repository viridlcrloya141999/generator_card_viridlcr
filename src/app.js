/* eslint-disable */
import "bootstrap";
import "./style.css";

let body = document.body;
body.style.backgroundColor = "green";

let divCard = document.querySelector("#card");
divCard.classList.add("card-background");

// Crear el array de símbolos y seleccionar uno al azar
let allSymbols = ["♦", "♥", "♠", "♣"];
let symbolSelector = Math.floor(Math.random() * allSymbols.length);
let selectedSymbol = allSymbols[symbolSelector];

// Crear y añadir el símbolo superior
let topSymbol = document.createElement("div");
topSymbol.classList.add("top-symbol");
topSymbol.setAttribute("id", "top-symbol");
topSymbol.textContent = selectedSymbol;
divCard.appendChild(topSymbol);

// Crear y añadir el número de la carta
let allNumbers = ["8", "3", "J"];
let numberSelector = Math.floor(Math.random() * allNumbers.length);
let selectedNumber = allNumbers[numberSelector];

let cardNumber = document.createElement("div");
cardNumber.classList.add("card-number");
cardNumber.setAttribute("id", "card-number");
cardNumber.textContent = selectedNumber;
divCard.appendChild(cardNumber);

// Crear y añadir el símbolo inferior
let bottomSymbol = document.createElement("div");
bottomSymbol.classList.add("bottom-symbol");
bottomSymbol.setAttribute("id", "bottom-symbol");
bottomSymbol.textContent = selectedSymbol;
divCard.appendChild(bottomSymbol);
