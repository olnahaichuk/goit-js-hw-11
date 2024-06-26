'use strict';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import simpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import {
  imageTemplate,
  imagesTemplate,
  showLoader,
  hideLoader,
  refs,
} from './js/render-functions';

hideLoader();

const lightbox = new simpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

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
      iziToast.error({
        message:
          'Sorry, there was an error fetching images. Please try again later!',
        maxWidth: '322px',
        iconUrl: closeImageURL,
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        titleColor: '#fff',
        theme: 'dark',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
