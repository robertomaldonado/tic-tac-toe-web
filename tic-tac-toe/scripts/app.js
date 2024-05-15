const playerConfigOverlayElm = document.getElementById("config-overlay");
const backdropElm = document.getElementById("backdrop");

const editPlaerOneBtnElm = document.getElementById("edit-player-one-btn");
const editPlaerTwoBtnElm = document.getElementById("edit-player-two-btn");
const cancelConfigBtnElm = document.getElementById("cancel-config-btn");

editPlaerOneBtnElm.addEventListener("click", openPlayerConfig);
editPlaerTwoBtnElm.addEventListener("click", openPlayerConfig);

cancelConfigBtnElm.addEventListener("click", closePlayerConfig);
backdropElm.addEventListener("click", closePlayerConfig);
