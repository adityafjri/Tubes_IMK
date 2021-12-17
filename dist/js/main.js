const heroBtn = document.querySelector('.hero-btn');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const logoJohn = document.querySelector('.logo')
// const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const signinBtn = document.querySelector('.signin-btn');

let showMenu = false;

heroBtn.addEventListener('click',redirectCatalogue);
menuBtn.addEventListener('click', toggleMenu);
logoJohn.addEventListener('click',redirectHome);
signinBtn.addEventListener('click',signinPop);


function redirectHome(){
    console.log("home")
    window.location='index.html'
}

function redirectCatalogue(){
    console.log("catalogue")
    window.location='catalogue.html'
}

function toggleMenu() {
    console.log("ha");
    if (!showMenu) {
        
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        // menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        // menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}
function signinPop(){
    document.getElementById("")
}

