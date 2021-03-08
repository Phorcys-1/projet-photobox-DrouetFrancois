import {config} from "./config.js"

let photoboxServeur = config.photoboxHost;

export function displayPicture(photo){
  //Récupérer la section la_photo
  let sectionPhoto = document.getElementById("la_photo");
  sectionPhoto.innerHTML = `
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

export function displayComments(commentaires){
    let sectionComments = document.getElementById("les_commentaires");
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