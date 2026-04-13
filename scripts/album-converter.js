import { albums } from './albums-data.js';

export const generateAlbumsHTML = () => {
   let albumHTML = '';

   for (const album of albums) {
       albumHTML += `
           <article class="album">
               <img src="${album.poster}" alt="${album.title} poster" class="album__poster">
               <div class="album__details">
                   <h2 class="album__title">${album.title}</h2>
                   <p class="album__description">${album.description}</p>
               </div>
           </article>
       `;
   }

   return albumHTML
};