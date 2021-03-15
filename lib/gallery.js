import {loadPicture, loadRessource} from "./photoloader.js"
import {displayPicture, displayCategorie, displayComments} from "./ui.js"

export let lIdPhotos =[100,101,102,103,100, 105,107,106];

export function load() {
    let sectionPhoto = document.getElementById("gallery_container");
    sectionPhoto.innerHTML = ``;
    
    lIdPhotos.forEach(id => {
        let promesse = loadPicture(id);
        promesse.then(displayPicture);
        promesse.then(getPictureCategorie).then(displayCategorie);
        promesse.then(getPictureCategorie).then(displayComments);

    });
}

const getPictureCategorie=(pictureData)=> {
    return loadRessource(pictureData.links.categorie.href);
}
  
let getPictureComments=(pictureData)=>{
    return loadRessource(pictureData.links.comments.href)
}
