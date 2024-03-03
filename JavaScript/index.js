//ramener l'element container
const container = document.querySelector('.container');
//ramener les liens pour login et signup
const loginLien = document.querySelector('.login-lien' );
const singupLien = document.querySelector('.signup-lien' );
//le popup boutton et l'icone X
const boutonPop = document.querySelector('.btnLogin-popup');
const fermerIcon = document.querySelector('.fermer');

//Ajout event a signup , login, popup boutton
singupLien.addEventListener('click', ()=> {
    container.classList.add('active');
});
loginLien.addEventListener('click', ()=> {
    container.classList.remove('active');
});

boutonPop.addEventListener('click', ()=> {
    container.classList.add('active-popup');
});
//////////////////////////Fermer le container avec le bouton X ///////////////////////
fermerIcon.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});


// Enregistrer les informations dans le localStorage lors de l'inscription
const signupForm = document.querySelector('.signup form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // formulaire ne soit soumis 

    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    //sauvegarde d'info
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // rediriger vers la page d'accueil 
    alert('Inscription réussie ! Redirection vers la page d\'accueil...');
    window.location.href = 'accueil.html';
});
////////////////// Obtenez le modal d'inscription ///////////////////////

function userInfo(){
    
    // Récupérer l'info connection
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Récupérer depuis le localStorage
    const storageEmail = localStorage.getItem('email');
    const storagePassword = localStorage.getItem('password');

    //  si les informations de connexion == informations d'inscription
    if (email === storageEmail && password === storagePassword) {
        // oui, rediriger vers accueil
        window.location.href = 'accueil.html';
    } else {
        // Sinon, message d'erreur 
        alert('Identifiants invalides. Veuillez réessayer.');
    }

    
  };
  
  
  
  // ////////////////// Obtenez le modal d'inscription ///////////////////////
  // var modal = document.getElementById('id01');
  
  // // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
  
  
  // ///////////////// Obtenez le modal de connexion //////////////////////////
  // var modal2 = document.getElementById('id02');
  
  // // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
  // window.onclick = function(event) {
  //     if (event.target == modal2) {
  //         modal.style.display = "none";
  //     }
  // }