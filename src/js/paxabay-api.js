import axios from 'axios';
import { createGallery } from './render-function';

const API_KEY = '53452930-453d1b75f98a5875cf6a66d5c';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
