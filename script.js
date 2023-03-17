const searchModal = document.getElementById("search-modal"),
      openModalBtn = document.getElementById("open-modal-btn"),
      closeModal = document.getElementById("close-modal"),
      searchBtn = document.getElementById("search-btn");

openModalBtn.onclick = () => {
   searchModal.style.display = "block";
}

closeModal.onclick = () => {
  searchModal.style.display = "none";
}

searchBtn.onclick = () => {
  searchModal.style.display ="none";
}
