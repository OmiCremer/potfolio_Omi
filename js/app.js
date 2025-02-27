// Esperar a que el contenido del DOM se cargue completamente antes de ejecutar el script

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el botón que activa el desplegable

  const workButton = document.getElementById("works-toggle");
  // Obtener la lista de trabajos (inicialmente oculta)

  const workList = document.getElementById("works-list");
  // Agregar un evento de clic al botón

  workButton.addEventListener("click", function () {
    // Si la lista está oculta, mostrarla; si está visible, ocultarla
    workList.style.display =
      workList.style.display === "none" || workList.style.display === ""
        ? "block"
        : "none";
  });
});
