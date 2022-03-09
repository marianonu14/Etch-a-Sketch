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
    createDiv();
  });

resetGrid.addEventListener('click', () => {
    contenedorPrincipal.style.backgroundColor = '#FFFFFF';
    btnColor.value = '#000000';
    selectColor = '#000000';
  });

  function createDiv() {
    contenedorPrincipal.createElement("DIV");  
  };



