import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');

const createGalleryItemsMarkup = array => {
  return array
    .map(({ preview, original, description }) => {
      const src = preview;
      const source = original;
      const alt = description;

      return `<div class="gallery__item">
    <a class="gallery__item" href=${source}>
    <img
    class="gallery__image"
    src=${src}
    alt=${alt}
    />
    </a>
    </div>`;
    })
    .join('');
};

const markup = createGalleryItemsMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('afterbegin', markup);

let lightbox;

const handleGalleryItemClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
  });
};

galleryContainerEl.addEventListener('click', handleGalleryItemClick);
