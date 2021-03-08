import {loadPicture} from "./photoloader.js"

let lIdPhotos =[100,101,102,103,100, 101,102,103]
export function load() {
    lIdPhotos.forEach(id => {
        let promesse = photoloader.loadPicture(id);
        promesse.then(ui.displayPicture);
        promesse.then(getPictureCategorie).then(ui.displayCategorie);
        promesse.then(getPictureCategorie).then(ui.displayComments);

    });
}