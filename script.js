const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav__toggle'); const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// Ejemplo: tracking opcional (puedes añadir Google Analytics aquí)
