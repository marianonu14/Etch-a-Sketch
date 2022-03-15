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


firstGrid.addEventListener('click', () => {
    createDiv(10);
    firstGrid.disabled = true;
  });

secondGrid.addEventListener('click', () => {
    createDiv(20);
    secondGrid.disabled = true;
  });

thirdGrid.addEventListener('click', () => {
    createDiv(30);
    thirdGrid.disabled = true;
  });

resetGrid.addEventListener('click', () => {
    contenedorPrincipal.style.backgroundColor = '#FFFFFF';
    btnColor.value = '#000000';
    selectColor = '#000000';
  });
  
function createDiv(cant) {

  for (let step = 0; step < cant*cant; step++) {
    const newDiv = document.createElement("div");
    
    newDiv.classList.add("Grid");
    contenedorPrincipal.style.gridTemplateColumns = `repeat(${cant}, 1fr)`
    
    newDiv.addEventListener('mousemove', () => {
      newDiv.style.backgroundColor = selectColor;
      newDiv.style.transition = '200ms';
    });
    
    contenedorPrincipal.appendChild(newDiv);
   };
};
