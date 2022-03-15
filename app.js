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
    contenedorPrincipal.innerHTML = ''
    
    createDiv(10);
    
    firstGrid.classList.add("active");
    secondGrid.classList.remove("active");
    thirdGrid.classList.remove("active");
  });

secondGrid.addEventListener('click', () => {
    contenedorPrincipal.innerHTML = ''
    
    createDiv(20);

    firstGrid.classList.remove("active");
    secondGrid.classList.add("active");
    thirdGrid.classList.remove("active");
  });

thirdGrid.addEventListener('click', () => {
    contenedorPrincipal.innerHTML = ''
    
    createDiv(30);

    firstGrid.classList.remove("active");
    secondGrid.classList.remove("active");
    thirdGrid.classList.add("active");
  });

resetGrid.addEventListener('click', () => {
    contenedorPrincipal.innerHTML = ''
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
