let editedPlayer = null;
let activePlayerId = 0;

const players = [
  { id: "one", name: "", symbol: "X" },
  { id: "two", name: "", symbol: "O" },
];

const board_game = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
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

// Select the element to start a new game
const startGameBtnElm = document.getElementById("start-game");
const activeGameSection = document.getElementById("active-game");
const gameFieldElms = document.querySelectorAll("#game-board li");
const activePlayerElm = document.querySelector("#active-player-name");

// Add event listeners to the player buttons
editPlaerOneBtnElm.addEventListener("click", openPlayerConfig);
editPlaerTwoBtnElm.addEventListener("click", openPlayerConfig);

// Add event listeners to the player overlay
cancelConfigBtnElm.addEventListener("click", closePlayerConfig);
backdropElm.addEventListener("click", closePlayerConfig);

// Add event listener to the form submit button
formElm.addEventListener("submit", savePlayerConfig);

// Add event listener to the start game button
startGameBtnElm.addEventListener("click", startNewGame);

// Add event listener to the game field
gameFieldElms.forEach((field) => {
  field.addEventListener("click", selectGameField);
});
