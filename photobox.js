import {load, lIdPhotos} from "./lib/gallery.js";
import {loadPicture} from "./lib/photoloader.js"
import {displayPicture, displayGallery} from "./lib/ui.js"


//window.addEventListener("load",function () {
  

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    console.log("loading galery....");
    let promesse = load();
    promesse.then(displayGallery);
  })
//})


console.log("coucou");