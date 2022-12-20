import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = makeGalleryItemsMakrup(galleryItems);

const imageModal = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});


function makeGalleryItemsMakrup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `
    )
    .join("");
}
