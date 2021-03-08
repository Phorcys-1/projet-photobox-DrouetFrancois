import photoloader from "./module/photoloader.js";
import ui from "./modules/ui.js"

const getPictureCategorie=(pictureData)=> {
    return photoloader.loadRessource(pictureData.links.categorie.href);
}
  
let getPictureComments=(pictureData)=>{
    return photoloader.loadRessource(pictureData.links.comments.href)
}

const getPicture = (pictureId) => {
        let promesse = photoloader.loadPicture(pictureId);
        promesse.then(ui.displayPicture);
        promesse.then(getPictureCategorie).then(ui.displayCategorie);
        promesse.then(getPictureCategorie).then(ui.displayComments);
}

getPicture(105);