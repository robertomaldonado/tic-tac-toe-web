function openPlayerConfig(event) {
  const selectedPlayerId = event.target.dataset.playerid; // Get the player ID
  editedPlayer = selectedPlayerId; // Set the edited player
  playerConfigOverlayElm.style.display = "block";
  backdropElm.style.display = "block";
  console.log(editedPlayer);
}

function closePlayerConfig() {
  playerConfigOverlayElm.style.display = "none"; // Hide the overlay
  backdropElm.style.display = "none"; // Hide the backdrop
  formElm.firstElementChild.classList.remove("error"); // Remove the error class from the input
  errorsOutputElm.textContent = ""; // Clear the error message
  formElm.reset(); // Reset the form
}

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target); // Get the form data
  const userPlayerName = formData.get("player-name").trim(); // Remove any leading or trailing spaces

  if (!userPlayerName) {
    event.target.firstElementChild.classList.add("error"); // Add a class to the input element
    errorsOutputElm.textContent = "Please enter a valid name";
    return; //Stop execution if the name is invalid
  }

  const updatedPlayerDataElm = document.getElementById(
    `player-${editedPlayer}-data`
  ); // Get the player name element

  updatedPlayerDataElm.children[1].textContent = userPlayerName; // Update the player name

  if (editedPlayer === "one") {
    players[0].name = userPlayerName; // Update the player name in the players array
  } else {
    players[1].name = userPlayerName; // Update the player name in the players array
  }

  closePlayerConfig(); // Close the overlay
};
