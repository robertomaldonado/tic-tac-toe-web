function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set usernames before starting the game");
    return;
  }
  activeGameSection.style.display = "block"; // Display the game section
}
