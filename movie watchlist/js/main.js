// Array to store the movie titles
let movieWatchlist = [];

// Function to add a movie to the watchlist
function addMovie() {
  const movieTitle = document.getElementById('movie-name').value.trim(); // Get the movie title from the input field

  if (movieTitle) {
    movieWatchlist.push(movieTitle); // Add the movie to the array
    document.getElementById('movie-name').value = ''; // Clear the input field
    displayWatchlist(); // Update the display
  } else {
    alert("Please enter a movie title."); // Alert if no input is given
  }
}

// Function to display the watchlist
function displayWatchlist() {
  const movieListContainer = document.getElementById('movie-list');
  movieListContainer.innerHTML = ''; // Clear the current display

  movieWatchlist.forEach((movie, index) => {
    const movieElement = document.createElement('li');
    movieElement.classList.add('collection-item');

    movieElement.innerHTML = `
      <span class="movie-title">${movie}</span>
      <a href="#" class="secondary-content remove-btn" onclick="removeMovie(${index})">
        <i class="material-icons">delete</i>
      </a>
    `;

    movieListContainer.appendChild(movieElement);
  });
}

// Function to remove a movie from the watchlist
function removeMovie(index) {
  movieWatchlist.splice(index, 1); // Remove the movie from the array
  displayWatchlist(); // Update the display
}

// Event listener for the "Add Movie" button
document.getElementById('add-movie-btn').addEventListener('click', addMovie);

// Display the initial (empty) watchlist
displayWatchlist();
