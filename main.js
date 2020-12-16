"use strict";  // 1 permet de détecter d'éventuelles erreurs ou bugs dans le code

// 2 ajouter une tache avec la methode addEventListener() 

form.addEventListener("submit", function(){ // on utilise la méthode addEventListener qui prend 3 paramètres (l'évenement,un callback = function, un boolen true ou false) ou on peut utiliser onclick et on lui ajoute un évenement cela va permettre d'éxecuter une action spécifique lors de l'intéraction avec n'importe quel élément du code html par ex: (input,button,li etc...)
    let liElt = document.createElement("li"); // création d'un élément li
    let textElt = document.createElement("span"); // création d'un élément span
    let spanRemoveElt = document.createElement("span"); // création d'un élément span
    let spanOptionElt = document.createElement("span"); // création d'un élément span
    
    textElt.classList.add("texte"); // ajout d'une class "texte" à la var textElt
    textElt.textContent = champTache.value; // textElt va prendre comme texte ce qu'il y a dans l'input champTache au moment ou l'on va cliquer sur le boutonAjouter
    spanRemoveElt.classList.add("removeliElt", "material-icons"); // ajout d'une class "removeliElt" et "material-icons" à la var spanRemoveElt
    spanRemoveElt.textContent = "delete_forever"; // spanRemoveElt va prendre comme texte delete_forever le nom de l'icône poubelle de la class material-icons
    spanOptionElt.classList.add("spanOptionElt"); // ajout d'une class "spanOptionElt" à la var spanOptionElt
    
    // let spanEltImportant = document.createElement("span");
    // spanEltImportant.classList.add("iconImportant", "material-icons");
    // spanEltImportant.textContent = "stars";
    
    // liElt.appendChild(spanRemoveEltImportant);
    liElt.appendChild(textElt); // on va ajouter dans liElt la var textElt
    liElt.appendChild(spanOptionElt); // on va ajouter dans liElt la var spanOptionElt
    spanOptionElt.appendChild(spanRemoveElt); // on va ajouter dans spanOptionElt la var spanRemoveElt
    listeDeTaches.appendChild(liElt); // on va ajouter dans listeDeTaches ol la var liElt
    champTache.value = " "; // pour vider le champTache on va mettre que champTache.value est égal à une chaînes de caractères vide symbolisé par les guillemets ""
    pasDeTache.style.display = "none"; // on va faire disparaître la class pasDeTache avec les propriétés css pasDeTache.style.display = "none"

    spanRemoveElt.onclick = () => removeTache(spanRemoveElt); // suppression des li avec la function removeTache() qui vient prendre en paramètre (liElt); on utilise la méthode onclick ici
    //spanEltImportant.onclick = () => tacheImportant(spanRemoveEltImportant);
    //spanEltImportant.addEventListener("click",function(){removeTache(liElt)});

    // 4 sauvegarde des tâches dans le localStorage
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML) // pour sauvegarder la listeDeTaches on va créer une clé que l'on va nommer "listTache" qui va prendre comme valeur listeDeTaches.innerHTML; ici le innerHTML va permettre de prendre tout le code html dans listeDeTaches 
    
    return false // permet aussi d'éviter l'action par défaut du formulaire

    //event.preventDefault(); // permet de valider le formulaire sans que la page soit rafraîchi; on lui dit avec event.preventDefault() (ne fait pas l'action par défaut du formulaire)
  })

// 3 function effacer une tache avec la methode remove()

function removeTache(tache){ // création d'une function removeTache avec un paramètre (tache)
    tache.parentElement.parentElement.remove(); // supression de la tâche avec la méthode remove() 
    
    if(listeDeTaches.innerHTML === ""){ // on va vérifier si listeDeTaches est vide
      pasDeTache.style.display = "block"; // si c'est le cas on va afficher la class pasDeTache avec les propriétés css pasDeTache.style.display = "block"
    }

    // 7 enregistrement de la nouvelle liste lors de l'actualisation de la page
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML)
}

// 5 suppression des tâches après stockage dans le localStorage à l'aide de la sélection de class et une boucle for of 

let removeSpanElements = document.querySelectorAll(".removeliElt"); // on va récupérer dans un tableau tous les éléments qui possèdent la class removeLiElt

for(let element of removeSpanElements){ // on va créer une var element qui va venir boucler dans le tableau removeSpanElements
  element.onclick = function(){ // on va appliquer à la var element la méthode onclick qui prendra comme valeur une function anonyme
    removeTache(element.parentElement.parentElement); // on va apeler la function removeTache puis lui passer en paramètre la var element et viser le parent du parent
  };
}  
//element.onclick = () => removeTache(element.parentElement)

// 6 affichage des tâches stockées dans le localStorage

listeDeTaches.innerHTML = (localStorage.getItem("listTache") != null) ? localStorage.getItem("listTache") : ""; // on attribut comme valeur à listeDeTaches.innerHTML une condition entre (), on met ensuite un point ? qui va venir vérifier si cette condition est vraie ou fausse; si elle est vraie afficher localStorage.getItem("listTache"), si fausse afficher listeDeTaches vide

// affichage de "aucune tache en cours" quand aucune valeur n'est entrée

pasDeTache.style.display = (listeDeTaches.innerHTML === "") ? "block" : "none";


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