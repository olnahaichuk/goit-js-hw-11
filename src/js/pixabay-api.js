'use strict';

import iziToast from 'izitoast';
import closeImageURL from '../img/close.png';

const BASE_URL = 'https://pixabay.com';
let userSymbol;

export function getImages(userSymbol) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    q: userSymbol,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: '44388717-c7f861c042cec84afe94caebd',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url)
    .then(res => {
      if (!res) {
        throw new Error('Response is not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: '322px',
          iconUrl: closeImageURL,
          backgroundColor: '#EF4040',
          messageColor: '#fff',
          titleColor: '#fff',
          theme: 'dark',
        });
      }
      return data;
    })
    .catch(error => console.log(error));
}
