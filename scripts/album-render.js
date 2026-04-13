export const renderAlbumsToDOM = (albumHTML) => {
   const albumList = document.getElementById('album-list');

   if (albumList) {
       albumList.innerHTML = albumHTML;
   } else {
       console.error('Could not find element with id "album-list"');
   }
};