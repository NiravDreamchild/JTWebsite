document.addEventListener("DOMContentLoaded", function () {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

  // Function to disable scrolling
  function disableScroll() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  // Function to enable scrolling
  function enableScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  // Function to open the lightbox
  function openLightbox(url) {
    disableScroll(); // Disable scrolling when lightbox is open
    lightboxModal.style.display = "flex";
    lightboxVideo.src = url;
    lightboxVideo.style.display = "block";
    lightboxImage.style.display = "none";
  }

  // Attach function to window object for external calls
  window.openLightbox = openLightbox;

  // Function to close the lightbox
  function closeLightbox() {
    enableScroll(); // Enable scrolling when lightbox is closed
    lightboxModal.style.display = "none";
    lightboxVideo.src = "";
    lightboxImage.src = "";
  }

  // Event listener for each lightbox trigger
  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.getAttribute("data-video-url");
      openLightbox(url);
    });
  });

  // Close the lightbox when clicking the close button or outside the content
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxModal.addEventListener("click", function (e) {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cardWrapper = document.querySelector(".card-flex-wrapper");
  const speed = 1; // Adjust speed for smoothness

  // Duplicate the content to create a seamless loop
  cardWrapper.innerHTML += cardWrapper.innerHTML;

  let position = 0;

  function moveCards() {
    position -= speed;
    cardWrapper.style.transform = `translateX(${position}px)`;

    // Reset when half of the cloned content has scrolled out
    if (Math.abs(position) >= cardWrapper.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(moveCards);
  }

  moveCards();
});
