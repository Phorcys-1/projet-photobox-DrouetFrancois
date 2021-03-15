import {load, lIdPhotos} from "./lib/gallery.js";
import {loadPicture} from "./lib/photoloader.js"



document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    console.log("loading galery....");
    load();
  })



console.log("coucou");