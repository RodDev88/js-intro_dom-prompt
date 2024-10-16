//seleccion imagen con querySelector
const image = document.querySelector("#dog-img");
//pedimos input al usuario con prompt
const borderRadiusValue = prompt("Ingresa el valor de border radius deseado en porcentaje sin signo % ");
//convertimos el valor ingresado a porcentaje y 
//lo aplicamos al estilo de la img
image.style.borderRadius = borderRadiusValue + "%";

