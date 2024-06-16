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
} from './js/render-functions';
