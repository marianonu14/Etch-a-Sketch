const btnColor = document.querySelector('#color');
const contenedorPrincipal = document.querySelector('#contenedor');
const firstGrid = document.querySelector('#first-grid');
const secondGrid = document.querySelector('#second-grid');
const thirdGrid = document.querySelector('#third-grid');
const resetGrid = document.querySelector('#reset');
const newDiv = document.createElement("div");
newDiv.textContent = "Esto es un DIV"

let selectColor = '#000000';

btnColor.addEventListener('change', (e) => {
    selectColor = e.target.value;
  });

contenedorPrincipal.addEventListener('mousemove', () => {
    contenedorPrincipal.style.backgroundColor = selectColor;
    contenedorPrincipal.style.transition = '200ms';
  });

firstGrid.addEventListener('click', () => {
    createDiv(firstGrid, 100);
  });

resetGrid.addEventListener('click', () => {
    contenedorPrincipal.style.backgroundColor = '#FFFFFF';
    btnColor.value = '#000000';
    selectColor = '#000000';
  });
  
function createDiv(grid, cant) {
    for (let step = 0; step < cant; step++) {
    //contenedorPrincipal.appendChild(newDiv);
    console.log('Creando Div');
    grid.disabled = true;
    grid.classList.add('active')
   };
};