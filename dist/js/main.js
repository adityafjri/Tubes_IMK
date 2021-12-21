const heroBtn = document.querySelector('.hero-btn');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const logoJohn = document.querySelector('.logo')
// const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const signinBtn = document.querySelector('.signin-btn');
const signinbtn = document.querySelector('.signin-btn');
const signin = document.querySelector('.signin');
const signinpop = document.querySelector('.signinpop');
const exit = document.querySelector('#exit');

const signinBtn2 = document.querySelector('.signn');

// let showMenu = false;

heroBtn.addEventListener('click',redirectCatalogue);
menuBtn.addEventListener('click', toggleMenu);
logoJohn.addEventListener('click',redirectHome);
signinbtn.addEventListener('click',signinPop);
exit.addEventListener('click',closeSignin);
signinBtn2.addEventListener('click',signIn);

function signIn(){
    console.log("lala")
    signin.style.display="none";
    signinpop.style.display ="none";
}
function signinPop(){
    signin.style.display = "block";
    signinpop.style.display = "block";
}
function closeSignin(){
    signin.style.display = "none";
    signinpop.style.display = "none";
}
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

