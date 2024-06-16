'use strict';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './pixabay-api.js';

const refs = {
  formElem: document.querySelector('form'),
  galleryElem: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};
refs.loader.className = 'loader';

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

const lightbox = new simpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
showLoader();
refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const searchName = e.target.elements.query.value.trim();
  showLoader();
  refs.galleryElem.innerHTML = '';

  getImages(searchName)
    .then(data => {
      const markup = imagesTemplate(data);
      refs.galleryElem.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});

export function imageTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a
            class="gallery-link"
            href="${largeImageURL}"
          >
            <img
              class="gallery-image"
              src="${webformatURL}"
              data-source="${largeImageURL}"
              alt="${tags}"
            />
          </a>
          <div class="desc">
          <p class="desc-item"><span class="desc-item-style">Likes</span><br> ${likes}</p>
          <p class="desc-item"><span class="desc-item-style">Views</span><br> ${views}</p>
          <p class="desc-item"><span class="desc-item-style">Comments</span><br> ${comments}</p>
          <p class="desc-item"><span class="desc-item-style">Downloads</span><br> ${downloads}</p>
          </div>
          
        </li>
  `;
}
export function imagesTemplate(data) {
  return data.hits.map(image => imageTemplate(image)).join('\n');
}
