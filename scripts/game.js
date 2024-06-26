function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set usernames before starting the game");
    return;
  }
  activeGameSection.style.display = "block"; // Display the game section
  activePlayerElm.textContent = players[activePlayerId].name; // Set the current player
  gameOverElm.style.display = "none"; // Hide the game over area
  gameFieldElms.forEach((field) => {
    field.textContent = ""; // Clear the field
    field.classList.remove("disabled"); // Enable the field
    field.addEventListener("click", selectGameField); // Add the event listener
  });
  board_game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  activePlayerId = 0;
  roundCount = 1;
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
    const clicked_col = parseInt(selectedField.dataset.col);
    const clicked_row = parseInt(selectedField.dataset.row);
    board_game[clicked_row - 1][clicked_col - 1] =
      currentPlayer.id === "one" ? 1 : 2; // Update the board
  }
  const winnerId = checkForGameOver();
  if (winnerId === 0 && roundCount === 9) {
    endGame(0);
  } else if (winnerId !== 0) {
    endGame(winnerId);
  }
  selectedField.removeEventListener("click", selectGameField); // Remove the event listener
  roundCount++; // Increment the round count
}

function endGame(winnerId) {
  gameOverElm.style.display = "block"; // Display the game over area
  winnerOutputElm.textContent = winnerId;
  winnerName = players[winnerId - 1].name;
  winnerOutputElm.textContent =
    winnerId === 0 ? "It's a draw" : winnerName + " wins!";
  gameFieldElms.forEach((field) =>
    field.removeEventListener("click", selectGameField)
  );
}

function checkForGameOver() {
  if (
    board_game[0][0] === board_game[1][1] &&
    board_game[1][1] === board_game[2][2] &&
    board_game[0][0] !== 0
  )
    return board_game[0][0];

  if (
    board_game[0][2] === board_game[1][1] &&
    board_game[1][1] === board_game[2][0] &&
    board_game[2][0] !== 0
  )
    return board_game[2][0];

  for (let i = 0; i < board_game.length; i++) {
    if (
      board_game[i].every((row) => row === 1) ||
      board_game.every((col) => col[i] === 1)
    )
      return 1;
    if (
      board_game[i].every((row) => row === 2) ||
      board_game.every((col) => col[i] === 2)
    )
      return 2;
  }
  return 0;
}
