document.addEventListener("DOMContentLoaded", function () {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

  // Function to open the lightbox
  function openLightbox(type, url) {
    lightboxModal.style.display = "flex";
    if (type === "video") {
      lightboxVideo.src = url;
      lightboxVideo.style.display = "block";
      lightboxImage.style.display = "none";
    } else if (type === "image") {
      lightboxImage.src = url;
      lightboxImage.style.display = "block";
      lightboxVideo.style.display = "none";
    }
  }

  // Attach function to window object for external calls
  window.openLightbox = openLightbox;

  // Function to close the lightbox
  function closeLightbox() {
    lightboxModal.style.display = "none";
    lightboxVideo.src = "";
    lightboxImage.src = "";
  }

  // Event listener for each lightbox trigger
  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const type = this.getAttribute("data-lightbox-type");
      const url =
        type === "video"
          ? this.getAttribute("data-video-url")
          : this.getAttribute("data-image-url");
      openLightbox(type, url);
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
