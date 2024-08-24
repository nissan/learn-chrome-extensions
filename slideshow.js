document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize RevealJS
  Reveal.initialize();

  // Get the button element
  const addSlideBtn = document.getElementById('addSlideBtn');

  // Add click event listener to the button
  addSlideBtn.addEventListener('click', () => {
    // Create a new section element
    const newSlide = document.createElement('section');
    
    // Add content to the new slide
    newSlide.innerHTML = '<h2>You created a new slide</h2>';

    // Add the new slide to the presentation
    document.querySelector('.slides').appendChild(newSlide);

    // Navigate to the new slide
    Reveal.slide(Reveal.getTotalSlides() - 1);
  });
});