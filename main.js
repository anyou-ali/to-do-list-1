"use strict";

// affichage des tâches stockées dans le localStorage

listeDeTaches.innerHTML = (localStorage.getItem("listTache") != null) ?
localStorage.getItem("listTache") : "";

// affichage de "aucune tache en cours" quand aucune valeur n'est entrée

pasDeTache.style.display = (listeDeTaches.innerHTML === "") ? "block" : "none";

// suppression des tâches après stockage dans le localStorage à l'aide de la sélection de class et une boucle for of 

let removeSpanElt = document.querySelectorAll(".removeliElt");

for(let element of removeSpanElt){
  element.onclick = function(){
    removeTache(element.parentElement.parentElement);
  };
  //element.onclick = () => removeTache(element.parentElement)
}

// ajouter une tache avec la methode addEventListener()

form.addEventListener("submit", function(){
    let liElt = document.createElement("li");
    let textElt = document.createElement("span");
    let spanElt = document.createElement("span");
    let spanOptionElt = document.createElement("span");
    
    textElt.classList.add("texte");
    textElt.textContent = champTache.value;
    spanElt.classList.add("removeliElt", "material-icons");
    spanElt.textContent = "delete_forever";
    spanOptionElt.classList.add("spanOptionElt");
    
    // let spanEltImportant = document.createElement("span");
    // spanEltImportant.classList.add("iconImportant", "material-icons");
    // spanEltImportant.textContent = "stars";
    
    spanElt.onclick = () => removeTache(liElt);
    //spanEltImportant.onclick = () => tacheImportant(spanEltImportant);
    //spanElt.addEventListener("click",function(){removeTache(liElt)});
    
    listeDeTaches.appendChild(liElt);
    // liElt.appendChild(spanEltImportant);
    liElt.appendChild(textElt);
    liElt.appendChild(spanOptionElt);
    spanOptionElt.appendChild(spanElt);
    champTache.value = " ";
    pasDeTache.style.display = "none";

    // sauvegarde des tâches dans le localStorage
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML)
    
    return false 

    //event.preventDefault(); // rechercher et bien comprendre ce que fait event.preventDefault();
  })

// function effacer une tache avec la methode remove()

function removeTache(tache){
    tache.remove();
    
    if(listeDeTaches.innerHTML === ""){
      pasDeTache.style.display = "block";
    }

    // enregistrement de la nouvelle liste lors de l'actualisation de la page
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML)
}

// empecher le resizing

const metas = document.getElementsByTagName("meta");
metas[1].content = `width=device-width, height=${window.innerHeight},initial-scale=1.0`;

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// button installation application

window.onbeforeinstallprompt = (event) => {
     event.preventDefault();
     installBtn.classList.add("slide");

     installBtn.onclick = () => {
       installBtn.classList.remove("slide");
       setTimeout(() => installBtn.style.display = "none", 800);
       event.prompt();
     }
}

// function toggle pour marquer une tache comme importante ne fonctionne pas pour le moment

// function tacheImportant(taskImportant){
//     taskImportant.classList.toggle("taskurgent");
//     localStorage.setItem("listTache", listeDeTaches.innerHTML);
//     return false
// }
  
//boutonAjouter.onclick = () => alert("hello"); function fléchée sans paramètre
//boutonAjouter.onclick = (prenom) => hello("Anyou"); function fléchée avec paramètre
//console.log(champTache.value)