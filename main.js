"use strict";

  // ajouter une tache avec la methode addEventListener()

form.addEventListener("submit", function(event){
    let li = document.createElement("li");
    let spanElt = document.createElement("span");
    li.innerHTML = champ.value;
    spanElt.textContent = " x";
    spanElt.onclick = () => removeTache(li);
    listeDeTaches.appendChild(li)
    li.appendChild(spanElt)
    champ.value = " ";
    event.preventDefault();
  })

  // function effacer une tache avec la methode remove()

function removeTache(tache){
    tache.remove();
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
  console.log(champ.value)