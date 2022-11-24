// Responsive Menu 
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expended', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const h2 = document.getElementById("h2-icon");

function icon(event){
    let icon = document.getElementById("icon-custom");
    icon.style.color = '#895FAB';
    h2.style.cursor = 'default';
}


h2.addEventListener('mouseover', icon);


let btnTheme = document.getElementById("dark-theme");

function dark(event){
    let body = document.getElementById("main");
    let servicos = document.getElementById("servicos");
    let linksNav = document.getElementById("a");
    let linksNav2 = document.getElementById("a2");
    let linksNav3 = document.getElementById("a3");
    let menu = document.getElementById("menu");

    body.classList.toggle("theme-dark");
    servicos.classList.toggle("themeDarkServicos");
    linksNav.classList.toggle("linksDark");
    linksNav2.classList.toggle("linksDark");
    linksNav3.classList.toggle("linksDark");
    menu.classList.toggle("menuDark");
}

btnTheme.addEventListener('click', dark);