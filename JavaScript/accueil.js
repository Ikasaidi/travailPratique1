function savegarde() {
    // Créer un tableau pour mettre les tâches et mettre  dans localStorage
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        tasks.push(task.textContent);
    });
    // le tableau en chaîne JSON 
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addtaskAndShow() {
    if (localStorage.getItem("tasks")) {
        // les convertir en tableau
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(taskText => {
            // Créer un élément de liste pour chaque tâche et ajouter le texte a  la liste des tâches
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
        });
    }
}

// Appeler la fonction addtashAndShow() pour charger les tâches enregistrées
document.addEventListener("DOMContentLoaded", addtaskAndShow);






const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll")

var task = "undone task ";
var done = "task done ";
var i = 0;
var j = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !==""){

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";

    const doneBtn = document.createElement("img");

    doneBtn.setAttribute("src", "./Images/icons8-checkmark-50.png");
    doneBtn.setAttribute('height', '18px');
    doneBtn.setAttribute('width', '18px');

    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
        listItem.id = "taskDone"});

    const editBtn = document.createElement("img");

    editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
    editBtn.setAttribute('height', '18px');
    editBtn.setAttribute('width', '18px');

    listItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
        taskInput.value = listItem.textContent
        listItem.remove()
    });

    const deleteBtn = document.createElement("img");

    deleteBtn.setAttribute("src", "./Images/icons8-delete-60.png");
    deleteBtn.setAttribute('height', '18px');
    deleteBtn.setAttribute('width', '18px');

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un

    //noeud existant en tant que dernier enfant d'un noeud parent particulier.

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {

    listItem.remove();

    });


    }else{
        alert("Veuillez entrer une tâche valide.");
    }
localStorage.setItem(task.concat(i), (taskText), i++)
clearAll.addEventListener("click", () => {
    localStorage.clear()
})
savegarde();
}
addTaskBtn.addEventListener("click", addTask);

function effaceStorage() {
    // Effacer toutes les tâches de l'interface utilisateurs et dutockage local
    taskList.innerHTML = "";
    localStorage.removeItem("tasks");
}
clearAll.addEventListener("click", effaceStorage);
