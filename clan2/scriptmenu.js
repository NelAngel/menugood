const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector('.toggle');
const searchBtn = body.querySelector('.search-box');
const modeSwitch = body.querySelector('.toggle-switch');
const modeText = body.querySelector('.mode-text');
const minimizedLogo = document.getElementById('logo-minimized');
const openLogo = document.getElementById('logo-open');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    toggleMenuImages(); // Llama a la función para cambiar las imágenes cuando se abre/cierra el menú
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        modeText.innerText = 'Modo Claro';
    } else {
        modeText.innerText = 'Modo Oscuro';
    }
});

function toggleMenuImages() {
    if (sidebar.classList.contains('close')) {
        minimizedLogo.style.display = 'block';
        openLogo.style.display = 'none';
    } else {
        minimizedLogo.style.display = 'none';
        openLogo.style.display = 'block';
    }
}

// Llama a la función para asegurarse de que las imágenes del logo se actualicen correctamente al cargar la página.
toggleMenuImages();
