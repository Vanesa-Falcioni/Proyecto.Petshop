// Seleccionamos el botón con la clase .hamb
const botonMenu = document.querySelector(".hamb");

// Seleccionamos el menú con el ID #menu-principal
const menu = document.querySelector("#menu-principal");

// Escuchamos el clic en el botón para poner/sacar la clase 'open'
botonMenu.addEventListener("click", () => {
  console.log("¡Hice clic en el botón!");
  menu.classList.toggle("open");
});
