import {load, lIdPhotos} from "./lib/gallery.js";
import {loadPicture} from "./lib/photoloader.js"
import {displayPicture} from "./lib/ui.js"



document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    console.log("loading galery....");
    load();
  })



console.log("coucou");