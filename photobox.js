import {load, lIdPhotos} from "./lib/gallery.js";
import {loadPicture} from "./lib/photoloader.js"



document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    console.log("click");

    load();

    /*
    lIdPhotos.forEach(element => {
      sectionPhoto.innerHTML += `
      <div class="vignette" >
      <img data-uri="/www/canals5/photobox/photos/${element}"
        src="${loadPicture(element)}">
        <h4 id = "la_categorie"></div>
        <ul id = "les_commentaires">
          <li></li>
          </ul>
    </div>
      `;
      
    });
    */

    
  })



console.log("coucou");