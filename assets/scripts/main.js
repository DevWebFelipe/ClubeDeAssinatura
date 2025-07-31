/* ==================================== */
/*        SCRIPT PRINCIPAL DO SITE      */
/* ==================================== */

/*
  Este arquivo serve para agrupar e organizar os scripts
  de comportamento da interface (menu, modais, sliders, etc.)
*/

// Exemplo: Toggle do menu mobile
const toggleMenu = document.querySelector("#toggle-menu")
const nav = document.querySelector("#navigation")

if (toggleMenu && nav) {
  toggleMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
}

/* 
  Aqui você pode adicionar novas funcionalidades JS.
  Ex: Scroll suave, animações com JS, sliders, etc.
*/
