form.addEventListener("submit", function(event){
    const li = document.createElement("li");
    li.textContent = champ.value;
    listeDeTaches.appendChild(li)
    champ.value = " ";
    event.preventDefault();
  })
  
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