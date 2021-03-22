import {config} from "./config.js"

let photoboxPointEntre = config.photoboxUri;
let photoboxServer = config.photoboxHost;

export function loadPicture(idPicture){
  return fetch(photoboxPointEntre+"photos/"+idPicture,{credentials : 'include'})
  .then(response => {
    if (response.ok){
      return response.json();
    }
    console.log("response error : "+response.status);
  })
  .catch(error => {
    console.log("Ooops il y a eu une erreur : "+error);
  });
}

export function loadRessource(uri){
  return fetch(uri, {
    credentials: 'include'
  })
  .then(response => {
    if (response.ok)return response.json();
    console.log("response error : "+response.status);
  })
  .catch(error => {
    console.log("Ooops une erreur s'est produite: "+error);
  })
}