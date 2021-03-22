import {loadPicture, loadRessource} from "./photoloader.js"
import {displayPicture, displayPictureOnly, displayCategorie, displayComments} from "./ui.js"

export let lIdPhotos =[100,101,102,103,105,106,107];

export function load() {
    let sectionPhoto = document.getElementById("gallery_container");
    sectionPhoto.innerHTML = ``;
    
    lIdPhotos.forEach(id => {
        let promesse = loadPicture(id);
        promesse.then(displayPictureOnly);
        //promesse.then(getPictureCategorie).then(displayCategorie);
        //promesse.then(getPictureCategorie).then(displayComments);

    });
}

const getPictureCategorie=(pictureData)=> {
    return loadRessource(pictureData.links.categorie.href);
}
  
let getPictureComments=(pictureData)=>{
    return loadRessource(pictureData.links.comments.href)
}
