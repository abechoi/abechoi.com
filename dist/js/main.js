const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const social = document.querySelector('.social-icons');
const copyright = document.querySelector('.copyright');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', closeMenu);


function toggleMenu(){
    
    if(!showMenu){
        openMenu();
    }
    else{
        closeMenu();
    }
}

function openMenu(){
    burger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach( i => {
        i.classList.add('open');
    });

    showMenu = true;
}

function closeMenu(){
    burger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach( i => {
        i.classList.remove('open');
    });

    showMenu = false;
}

window.onscroll = function() { rotate() };

function rotate() {

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    social.classList.add('turn');
    copyright.classList.add('turn');
  } else {
    social.classList.remove('turn');
    copyright.classList.remove('turn');
  }
}