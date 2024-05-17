function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set usernames before starting the game");
    return;
  }
  activeGameSection.style.display = "block"; // Display the game section
  activePlayerElm.textContent = players[activePlayerId].name; // Set the current player
}

function selectGameField(event) {
  const selectedField = event.target;
  if (selectedField.textContent === "") {
    const currentPlayer = players[activePlayerId]; //TO-DO: Change the current player based on the game logic
    selectedField.textContent = currentPlayer.symbol; // Set the player symbol
    selectedField.classList.add("disabled"); // Disable the field
    activePlayerId = activePlayerId === 1 ? 0 : 1; //Swap players
    activePlayerElm.textContent = players[activePlayerId].name; // Update the current player
  }
}
