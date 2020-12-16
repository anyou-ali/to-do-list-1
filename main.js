"use strict";  // 1 permet de détecter d'éventuelles erreurs ou bugs dans le code

// 2 ajouter une tache avec la methode addEventListener() 

form.addEventListener("submit", function(){ // on utilise la méthode addEventListener qui prend 3 paramètres (l'évenement,un callback = function, un boolen true ou false) ou on peut utiliser onclick et on lui ajoute un évenement cela va permettre d'éxecuter une action spécifique lors de l'intéraction avec n'importe quel élément du code html par ex: (input,button,li etc...)
    let liElt = document.createElement("li"); // création d'un élément li
    let textElt = document.createElement("span"); // création d'un élément span
    let spanElt = document.createElement("span"); // création d'un élément span
    let spanOptionElt = document.createElement("span"); // création d'un élément span
    
    textElt.classList.add("texte"); // ajout d'une class "texte" à la var textElt
    textElt.textContent = champTache.value; // textElt va prendre comme texte ce qu'il y a dans l'input champTache au moment ou l'on va cliquer sur le boutonAjouter
    spanElt.classList.add("removeliElt", "material-icons"); // ajout d'une class "removeliElt" et "material-icons" à la var spanElt
    spanElt.textContent = "delete_forever"; // spanElt va prendre comme texte delete_forever le nom de l'icône poubelle de la class material-icons
    spanOptionElt.classList.add("spanOptionElt"); // ajout d'une class "spanOptionElt" à la var spanOptionElt
    
    // let spanEltImportant = document.createElement("span");
    // spanEltImportant.classList.add("iconImportant", "material-icons");
    // spanEltImportant.textContent = "stars";
    
    listeDeTaches.appendChild(liElt); // on va ajouter dans listeDeTaches ol la var liElt
    // liElt.appendChild(spanEltImportant);
    liElt.appendChild(textElt); // on va ajouter dans liElt la var textElt
    liElt.appendChild(spanOptionElt); // on va ajouter dans liElt la var spanOptionElt
    spanOptionElt.appendChild(spanElt); // on va ajouter dans spanOptionElt la var spanElt
    champTache.value = " "; // pour vider le champTache on va mettre que champTache.value est égal à une chaînes de caractères vide symbolisé par les guillemets ""
    pasDeTache.style.display = "none"; // on va faire disparaître la class pasDeTache avec les propriétés css pasDeTache.style.display = "none"

    spanElt.onclick = () => removeTache(liElt); // suppression des li avec la function removeTache() qui vient prendre en paramètre (liElt); on utilise la méthode onclick içi
    //spanEltImportant.onclick = () => tacheImportant(spanEltImportant);
    //spanElt.addEventListener("click",function(){removeTache(liElt)});

    // 4 sauvegarde des tâches dans le localStorage
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML)
    
    return false // permet aussi d'éviter l'action par défaut du formulaire

    //event.preventDefault(); // permet de valider le formulaire sans que la page soit rafraîchi; on lui dit avec event.preventDefault() (ne fait pas l'action par défaut du formulaire)
  })

// 3 function effacer une tache avec la methode remove()

function removeTache(tache){ // création d'une function removeTache avec un paramètre (tache)
    tache.remove(); // supression de la tâche avec la méthode remove() 
    
    if(listeDeTaches.innerHTML === ""){ // on va vérifier si listeDeTaches est vide
      pasDeTache.style.display = "block"; // si c'est le cas on va afficher la class pasDeTache avec les propriétés css pasDeTache.style.display = "block"
    }

    // enregistrement de la nouvelle liste lors de l'actualisation de la page
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML)
}

// affichage des tâches stockées dans le localStorage

listeDeTaches.innerHTML = (localStorage.getItem("listTache") != null) ? localStorage.getItem("listTache") : ""; // on applique à listeDeTaches.innerHTML une condition entre (), on met ensuite ? qui va venir vérifier si cette condition est vraie ou fausse; si elle est vraie afficher localStorage.getItem("listTache"), si fausse afficher listeDeTaches vide

// affichage de "aucune tache en cours" quand aucune valeur n'est entrée

pasDeTache.style.display = (listeDeTaches.innerHTML === "") ? "block" : "none";

// suppression des tâches après stockage dans le localStorage à l'aide de la sélection de class et une boucle for of 

let removeSpanElt = document.querySelectorAll(".removeliElt");

for(let element of removeSpanElt){
  element.onclick = function(){
    removeTache(element.parentElement.parentElement);
  };
  //element.onclick = () => removeTache(element.parentElement)


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