const container = document.querySelector('.container');
const loginLien = document.querySelector('.login-lien' );
const singupLien = document.querySelector('.signup-lien' );
const boutonPop = document.querySelector('.btnLogin-popup');
const fermerIcon = document.querySelector('.fermer');
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
    event.preventDefault(); // Pour éviter que le formulaire ne soit soumis normalement
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // Vous pouvez également ajouter d'autres informations ici si nécessaire
    // Par exemple, le nom d'utilisateur, etc.
    // Ensuite, vous pouvez rediriger l'utilisateur vers la page d'accueil ou effectuer d'autres actions
    alert('Inscription réussie ! Redirection vers la page d\'accueil...');
    window.location.href = 'accueil.html';
});
////////////////// Obtenez le modal d'inscription ///////////////////////

function userInfo(){
    
    // Récupérer les données du formulaire de connexion
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Récupérer les données d'inscription depuis le localStorage
    const storageEmail = localStorage.getItem('email');
    const storagePassword = localStorage.getItem('password');

    // Vérifier si les informations de connexion correspondent aux informations d'inscription
    if (email === storageEmail && password === storagePassword) {
        // Si les informations correspondent, rediriger l'utilisateur vers une autre page
        window.location.href = 'accueil.html';
    } else {
        // Sinon, afficher un message d'erreur ou effectuer d'autres actions
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