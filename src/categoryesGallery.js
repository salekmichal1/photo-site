'use strict';

///////////////////////////////////////
// CATEGORIES SUBPAGES GALLERY

const galleryLightbox = document.querySelector('.category-gallery');

lightGallery(galleryLightbox, {
  controls: true,
});

// const gallery = new Macy({
//   container: '.category-gallery',
//   trueOrder: true,
//   mobileFirst: true,
//   columns: 1,
//   breakAt: {
//     490: {
//       columns: 2,
//     },
//     1024: {
//       columns: 3,
//     },
//   },
//   margin: {
//     x: 10,
//     y: 10,
//   },
// });

// gallery.runOnImageLoad(function () {
//   gallery.recalculate(true);
// }, true);
