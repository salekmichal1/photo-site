'use strict';

// MAIN GALLERY
const galleryBtn = document.querySelector('.gallery-btn');
const galleryCoat = document.querySelector('.gallery-coat');
const galleryContainer = document.querySelector('.gallery');
const galleryOverflow = document.querySelector('.gallery-overflow');

galleryBtn.addEventListener('click', function () {
  galleryCoat.style.height = '0';
  galleryBtn.style.display = 'none';
  galleryOverflow.style.height = 'auto';
});

window.addEventListener('load', function () {
  let galleryDinamicSize = galleryContainer.offsetHeight;
  galleryOverflow.style.height = `${
    galleryDinamicSize > 2500
      ? galleryDinamicSize / 6
      : galleryDinamicSize / 3.5
  }px`;
});

///////////////////////////////////////
// ALL RESIZE OPTIONS
window.addEventListener('resize', function () {
  // FOR GALLERY
  let galleryDinamicSize = galleryContainer.offsetHeight;
  galleryOverflow.style.height = `${
    galleryDinamicSize > 3000
      ? galleryDinamicSize / 5
      : galleryDinamicSize / 3.5
  }px`;
  galleryCoat.style.height = '100%';
  galleryBtn.style.display = 'block';
});
