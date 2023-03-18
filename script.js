const searchModal = document.getElementById("search-modal"),
      openModalBtn = document.getElementById("open-modal-btn"),
      closeModal = document.getElementById("close-modal");
      searchBtn = document.getElementById("search-btn");

openModalBtn.onclick = () => {
  searchModal.style.display = "block";
}
closeModal.onclick = () => {
  searchModal.style.display = "none";
}
searchBtn.onclick = () => {
  const link = getLink();
  if (link) {
    searchModal.style.display ="none";
    window.open(link);
  }
}
// end modal window


const searchInput = document.getElementById('search-input');
const radioBtns = document.querySelectorAll('input[type=radio][name=search]');

function getLink() {
  const inputValue = searchInput.value.trim();
  if (inputValue !== '') {
    const selectedSearch = [...radioBtns].find(rb => rb.checked).value;
    const baseUrls = {
      opac: 'https://opac.sciencelib.ge/cgi-bin/koha/opac-search.pl?q=',
      openlibrary: 'http://openlibrary.ge/simple-search?query=',
      openscience: 'https://openscience.ge/simple-search?query=',
      openjournals: 'https://openjournals.ge/index.php/index/search/?query='
    };
    return baseUrls[selectedSearch] + inputValue;
  }
  const errorMsg = document.getElementById('error-msg')
  errorMsg.style.opacity = '1'
  setTimeout(() => {
    errorMsg.style.opacity = "0";
  }, 3000); 
  return null;
}

searchBtn.addEventListener('click', () => {
  const link = getLink();
  if (link) {
    window.open(link);
  }
});

searchInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    const link = getLink();
    if (link) {
      window.open(link);
    }
  }
});