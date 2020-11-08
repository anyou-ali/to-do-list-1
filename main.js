"use strict";

// affichage des tâches stockées dans le localStorage

listeDeTaches.innerHTML = localStorage.getItem("listTache");

// suppression des tâches après stockage dans le localStorage à l'aide de la sélection de class et une boucle for of 

let removeSpanElt = document.querySelectorAll(".removeliElt");

for(let element of removeSpanElt){
  element.onclick = function(){
    removeTache(element.parentElement);
  };
  //element.onclick = () => removeTache(element.parentElement)
}

// ajouter une tache avec la methode addEventListener()

form.addEventListener("submit", function(event){
    let liElt = document.createElement("li");
    let spanElt = document.createElement("span");
    spanElt.classList.add("removeliElt", "material-icons");
    liElt.innerHTML = champTache.value;
    spanElt.textContent = "delete_forever";
    spanElt.onclick = () => removeTache(liElt);
    //spanElt.addEventListener("click",function(){removeTache(liElt)})
    listeDeTaches.appendChild(liElt)
    liElt.appendChild(spanElt)
    champTache.value = " ";
    pasDeTache.style.display = "none";

    // sauvegarde des tâches dans le localStorage
    
    localStorage.setItem("listTache", listeDeTaches.innerHTML)    

    event.preventDefault();
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
  
  /*
  boutonAjouter.addEventListener("click", function(){
    const li = document.createElement("li");
    li.textContent = champ.value;
    listeDeTaches.appendChild(li)
    champ.value = " ";
  })
  */
  
  //boutonAjouter.onclick = () => alert("hello"); function fléchée sans paramètre
  //boutonAjouter.onclick = (prenom) => hello("Anyou"); function fléchée avec paramètre
  //console.log(champTache.value)