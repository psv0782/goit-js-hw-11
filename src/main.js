import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

hideLoader();
const form = document.querySelector('.form');
const input = form.querySelector('input');

clearGallery();
form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();
  const query = input.value.trim();
  if (!query) return;
  showLoader();
  try {
    const photos = await getImagesByQuery(query);
    if (!photos.hits.length) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again! ',
        position: 'center',
        color: 'red',
      });
    } else {
      createGallery(photos.hits);
    }
  } catch (error) {
    iziToast.show({
      message: 'Failed to fetch images. Please try again later.',
      position: 'center',
      color: 'red',
    });
  }
  hideLoader();
});