// Function to show the podcast player when "Listen Now" button is clicked
function showPlayer() {
    document.getElementById("player").style.display = "block";
    document.getElementById("intro").style.display = "none";
}

// Function to hide the podcast player when "Hide Player" button is clicked
function hidePlayer() {
    document.getElementById("player").style.display = "none";
    document.getElementById("intro").style.display = "block";
}
