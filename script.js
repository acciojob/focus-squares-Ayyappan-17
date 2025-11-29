//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll('.square');

// Add event listeners for mouseover and mouseout
squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    // On hover, change all other squares to Coffee
    squares.forEach((s) => {
      if (s !== square) {
        s.style.backgroundColor = '#6F4E37'; // Coffee
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    // On leaving, revert all squares to Lavender
    squares.forEach((s) => {
      s.style.backgroundColor = '#E6E6FA'; // Lavender
    });
  });
});
