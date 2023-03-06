// Get all video links
const videoLinks = document.querySelectorAll('.video-link');

// Iterate over each video link
videoLinks.forEach(link => {
  // Add click event listener to open video in a lightbox
  link.addEventListener('click', e => {
    e.preventDefault();
    const videoSrc = link.getAttribute('href');
    const videoLightbox = document.createElement('div');
    videoLightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <video controls>
          <source src="${videoSrc}" type="video/mp4">
        </video>
      </div>
    `;
    document.body.appendChild(videoLightbox);

    // Add click event listener to close lightbox
    const closeBtn = videoLightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(videoLightbox);
    });
