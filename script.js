// Récupère l'élément avec l'id 'input-box' et le stocke dans la variable inputBox
const inputBox = document.getElementById('input-box');

// Récupère l'élément avec l'id 'list-container' et le stocke dans la variable listContainer
const listContainer = document.getElementById('list-container');


function AddTask(){
    // Vérifie si la valeur de inputBox est vide
    if (inputBox.value === '') {
        // Affiche une alerte si inputBox est vide
        alert('Vous devez écrire une tache!');
    }
    else {
        // Crée un nouvel élément 'li'
        let li = document.createElement('li');
        // Définit le contenu de li comme étant la valeur de inputBox
        li.innerHTML = inputBox.value;
        // Ajoute le nouvel élément li à listContainer
        listContainer.appendChild(li);
        // Crée un nouvel élément 'span'
        let span = document.createElement("span");
        // Définit le contenu de span comme étant le symbole '×'
        span.innerHTML = "\u00d7";
        // Ajoute le span comme enfant de li
        li.appendChild(span);
    }
    // Vide la valeur de inputBox
    inputBox.value = '';
    // Appelle la fonction saveData pour sauvegarder l'état actuel de la liste
    saveData();
}

// Ajoute un écouteur d'événements 'click' à listContainer
listContainer.addEventListener("click", function(e){
    // Vérifie si l'élément cliqué est un 'LI'
    if (e.target.tagName === "LI") {
        // Bascule la classe 'checked' pour l'élément cliqué
        e.target.classList.toggle("checked");
    }
    // Vérifie si l'élément cliqué est un 'SPAN'
    else if (e.target.tagName === "SPAN") {
        // Supprime le parent de l'élément cliqué (le 'LI')
        e.target.parentElement.remove();
        // Appelle la fonction saveData pour sauvegarder l'état actuel de la liste
        saveData();
    }
}, false);

function saveData() {
    // Sauvegarde le contenu actuel de listContainer dans le localStorage sous la clé "data"
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    // Récupère les données sauvegardées dans le localStorage et les affiche dans listContainer
    listContainer.innerHTML = localStorage.getItem("data");
}

// Appelle la fonction showTask pour afficher les tâches sauvegardées à l'initialisation
showTask();
