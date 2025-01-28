document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll(".openModal");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModal");

    // Add click event listeners to all buttons with the 'openModal' class
    openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.classList.remove("hidden"); // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener("click", () => {
        modal.classList.add("hidden"); // Hide the modal
    });

    // Optionally, close the modal when clicking outside of the modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});