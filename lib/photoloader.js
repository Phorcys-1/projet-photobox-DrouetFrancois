import {config} from "./config.js"

let photoboxPointEntre = config.photoboxUri;

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