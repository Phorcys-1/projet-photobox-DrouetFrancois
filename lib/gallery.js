import {loadPicture, loadRessource} from "./photoloader.js"
import {displayPicture, displayPictureOnly, displayCategorie, displayComments} from "./ui.js"

export let lIdPhotos =[100,101,102,103,105,106,107];

export function load() {
    //let sectionPhoto = document.getElementById("gallery_container");
    //sectionPhoto.innerHTML = ``;
    let pageURI = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/photos";

    return loadRessource(pageURI);
    /*
    lIdPhotos.forEach(id => {
        let promesse = loadPicture(id);
        promesse.then(displayPictureOnly);
        //promesse.then(getPictureCategorie).then(displayCategorie);
        //promesse.then(getPictureCategorie).then(displayComments);

    });
    
    let gallerie = document.querySelectorAll(".vignette");
    console.log(gallerie);
    gallerie.forEach(element => {
        console.log(element);
        element.addEventlistener("click",function () {
            console.log("click");
        })
    });
    */
}

const getPictureCategorie=(pictureData)=> {
    return loadRessource(pictureData.links.categorie.href);
}
  
let getPictureComments=(pictureData)=>{
    return loadRessource(pictureData.links.comments.href)
}
