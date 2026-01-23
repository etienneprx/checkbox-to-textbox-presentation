document.addEventListener('DOMContentLoaded', (event) => {
  // Select all images that should be zoomable
  const images = document.querySelectorAll('.reveal .slides img.zoomable');

  images.forEach(img => {
    // Set the cursor to indicate the image is clickable
    img.style.cursor = 'zoom-in';

    img.addEventListener('click', (e) => {
      // Prevent the click from propagating to parent elements
      e.stopPropagation();

      // Toggle the 'zoomed' class
      img.classList.toggle('zoomed');

      // If the image is now zoomed, add a listener to the body to unzoom
      if (img.classList.contains('zoomed')) {
        // Change cursor for zoomed image
        img.style.cursor = 'zoom-out';

        const unzoom = () => {
          img.classList.remove('zoomed');
          img.style.cursor = 'zoom-in';
          document.body.removeEventListener('click', unzoom);
        };

        // Add a one-time event listener to the body to unzoom on next click
        // Use a timeout to prevent the current click from being captured
        setTimeout(() => {
          document.body.addEventListener('click', unzoom, { once: true });
        }, 0);

      } else {
        // If the image is unzoomed, reset the cursor
        img.style.cursor = 'zoom-in';
      }
    });
  });
});
