function openPlayerConfig() {
  playerConfigOverlayElm.style.display = "block";
  backdropElm.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElm.style.display = "none";
  backdropElm.style.display = "none";
}

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target); // Get the form data
  const userPlayerName = formData.get("player-name"); // Get the value of the input field
  userPlayerName = userPlayerName.trim(); // Remove any leading or trailing spaces
  closePlayerConfig(); // Close the overlay
};
