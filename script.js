// Function to open the modal and display the clicked image
function openModal(imageSrc) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

// Function to close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
