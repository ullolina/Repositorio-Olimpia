document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const contenedor = document.querySelector(".contenedor");
  
    menuToggle.addEventListener("click", function () {
        if (contenedor.style.display === "flex") {
            contenedor.style.display = "none";
        } else {
            contenedor.style.display = "flex";
        }
    });
  });