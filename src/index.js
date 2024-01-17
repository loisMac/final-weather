const searchButton = document.getElementById('search-button');
const searchForm = document.getElementById('search-form');

searchButton.addEventListener('click', function() {
  searchForm.style.display = 'block';
});

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('search-input').value;
  
});