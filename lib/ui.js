import {config} from "./config.js"
import { loadPicture } from "./photoloader.js";

let photoboxServeur = config.photoboxHost;

export function displayPicture(photo){
  //Récupérer la section la_photo
  let sectionPhoto = document.getElementById("gallery_container");
  sectionPhoto.innerHTML += `
  <img src="${photoboxServeur+photo.photo.url.href}">
  <h4>${photo.photo.titre}</h4>
  <p>${photo.photo.descr}</p>
  <p>${photo.photo.type}, ${photo.photo.width} x ${photo.photo.height}</p>
  <h4 id="la_categorie">categorie : categorie de l'image</h4>
  <h4>commentaires : </h4>
  <ul id="les_commentaires">
    <li>pseudo : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vitae.</li>
    <li>pseudo : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, recusandae.</li>
  </ul>
  `;
}

export function displayPictureOnly(photo){
  //Récupérer la section la_photo
  let sectionPhoto = document.getElementById("gallery_container");
  let photoHtml = `
  <div class = "vignette">
    <img src="${photoboxServeur+photo.photo.url.href}" class="image_gallery" role = "button" id ="p${+photo.photo.id}">
  </div>
  `;
  sectionPhoto.innerHTML += photoHtml;
  /*
  console.log("p"+photo.photo.id);
  console.log(document.getElementById("p"+photo.photo.id));
  document.getElementById("p"+photo.photo.id).addEventListener("click", function() {
    console.log("click");
    */
  }

  export function displayGallery(gallery) {
    let galleryContainer = document.getElementById("gallery_container");
    let rep = galleryContainer.innerHTML =gallery.photos.reduce(function (codeHTML, e) {
      return codeHTML+ `
      <div class="vignette">
      <img id ="${e.photo.id}" data-img="${e.photo.original.href}" data-uri="${e.links.self.href}" src="https://webetu.iutnc.univ-lorraine.fr${e.photo.thumbnail.href}"/>
      </div>`
      
    }, ""
    )
    galleryContainer.innerHTML = rep;
    galleryContainer.querySelectorAll(".vignette").forEach((item) => {
      item.addEventListener("click", function() {
        console.log("action"+" "+item.firstElementChild.id); 
        let promesse = loadPicture(item.firstElementChild.id);
        promesse.then(displayPicture);

        //TODO transformer displayPicture en displayLightbox
      })
    });
  }


export function displayComments(commentaires){
    let sectionComments = document.getElementById("les_commentaires");
    console.log("commm:    " + sectionComments);
    sectionComments.innerHTML = commentaires.comments.map((commentaire)=>{
      return `<li>${commentaire.titre} : ${commentaire.content}</li>`;
    }).reduce((htmlCode,commentaire)=>{
      return htmlCode += commentaire;
    },"");
}

export function displayCategorie(categorie){
    let sectionCategorie = document.getElementById("la_categorie");
    sectionCategorie.innerHTML = `categorie : ${categorie.categorie.descr}`;
  }