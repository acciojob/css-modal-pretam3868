//your JS code here. If required.
const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementsByClassName("close-modal")[0];

    // When the user clicks the button, open the modal
    openModalBtn.onclick = function () {
      modal.style.display = "block";
    };
