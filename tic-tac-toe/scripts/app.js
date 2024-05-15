let editedPlayer = null;

const players = [
  { id: "one", name: "", symbol: "X" },
  { id: "two", name: "", symbol: "O" },
];

// Elements related to the overlay
const playerConfigOverlayElm = document.getElementById("config-overlay");
const backdropElm = document.getElementById("backdrop");

// Select the form element
const formElm = document.querySelector("form");

// Select the element to display errors
const errorsOutputElm = document.getElementById("config-errors");

// Elements related to the game config
const editPlaerOneBtnElm = document.getElementById("edit-player-one-btn");
const editPlaerTwoBtnElm = document.getElementById("edit-player-two-btn");
const cancelConfigBtnElm = document.getElementById("cancel-config-btn");

// Add event listeners to the player buttons
editPlaerOneBtnElm.addEventListener("click", openPlayerConfig);
editPlaerTwoBtnElm.addEventListener("click", openPlayerConfig);

// Add event listeners to the player overlay
cancelConfigBtnElm.addEventListener("click", closePlayerConfig);
backdropElm.addEventListener("click", closePlayerConfig);

// Add event listener to the form submit button
formElm.addEventListener("submit", savePlayerConfig);
