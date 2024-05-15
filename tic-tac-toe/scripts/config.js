function openPlayerConfig(evt) {
  editedPlayer = +evt.target.dataset.playerid; // Get the player ID, covert to int
  playerConfigOverlayElm.style.display = "block";
  backdropElm.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElm.style.display = "none"; // Hide the overlay
  backdropElm.style.display = "none"; // Hide the backdrop
  formElm.firstElementChild.classList.remove("error"); // Remove the error class from the input
  errorsOutputElm.textContent = ""; // Clear the error message
  formElm.reset(); // Reset the form
}

const savePlayerConfig = (evt) => {
  evt.prevtDefault();
  const formData = new FormData(evt.target); // Get the form data
  const userPlayerName = formData.get("player-name").trim(); // Remove any leading or trailing spaces

  if (!userPlayerName) {
    evt.target.firstElementChild.classList.add("error"); // Add a class to the input element
    errorsOutputElm.textContent = "Please enter a valid name";
    return; //Stop execution if the name is invalid
  }

  closePlayerConfig(); // Close the overlay
};
