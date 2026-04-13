import { generateAlbumsHTML } from './album-converter.js';
import { renderAlbumsToDOM } from './album-render.js';

const albumHTML = generateAlbumsHTML();
renderAlbumsToDOM(albumHTML);