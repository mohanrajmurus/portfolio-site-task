const menuBar = document.getElementById('menu--bar');
const navBar = document.querySelector('.header--nav__bar')
const closeMenu = document.querySelector('.close--menu')
menuBar.addEventListener('click',() => {
    navBar.classList.add('side--menu')
    closeMenu.classList.add('close')
})
closeMenu.addEventListener('click',()=>{
    navBar.classList.remove('side--menu')
    closeMenu.classList.remove('close')
})