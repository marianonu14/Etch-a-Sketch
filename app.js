const btnColor = document.querySelector('#color');
const contenedorPrincipal = document.querySelector('#contenedor');
const firstGrid = document.querySelector('#first-grid');
const secondGrid = document.querySelector('#second-grid');
const thirdGrid = document.querySelector('#third-grid');
const resetGrid = document.querySelector('#reset');

let selectColor = '#000000';

btnColor.addEventListener('change', (e) => {
    selectColor = e.target.value;
  });

contenedorPrincipal.addEventListener('mousemove', () => {
    contenedorPrincipal.style.backgroundColor = selectColor;
    contenedorPrincipal.style.transition = '200ms';
  });

firstGrid.addEventListener('click', () => {
    createDiv(100);
  });

secondGrid.addEventListener('click', () => {
    createDiv(400);
  });

thirdGrid.addEventListener('click', () => {
    createDiv(900);
  });

resetGrid.addEventListener('click', () => {
    contenedorPrincipal.style.backgroundColor = '#FFFFFF';
    btnColor.value = '#000000';
    selectColor = '#000000';
    createDiv(100);
  });
  
function createDiv(cant) {
    for (let step = 0; step < cant; step++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "DIV";
    newDiv.classList.add("Grid");
    contenedorPrincipal.appendChild(newDiv);
   };
};