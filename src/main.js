import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', handlerSubmit);
hideLoader();

function handlerSubmit(event) {
  event.preventDefault();
  const searchValue = input.value;

  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
    .then(res => {
      if (res.data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
        });
      } else {
        createGallery(res.data.hits);
      }
    })
    .catch(error => console.log(error))
    .finally(() => hideLoader());
}
