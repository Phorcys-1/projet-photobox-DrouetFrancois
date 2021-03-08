import {loadPicture} from "./photoloader.js"
import {displayPicture, displayCategorie, displayComments} from "./ui.js"

let lIdPhotos =[100,101,102,103,100, 101,102,103]

export function load() {
    lIdPhotos.forEach(id => {
        let promesse = loadPicture(id);
        promesse.then(displayPicture);
        promesse.then(getPictureCategorie).then(displayCategorie);
        promesse.then(getPictureCategorie).then(displayComments);

    });
}

const getPictureCategorie=(pictureData)=> {
    return photoloader.loadRessource(pictureData.links.categorie.href);
}
  
let getPictureComments=(pictureData)=>{
    return photoloader.loadRessource(pictureData.links.comments.href)
}
