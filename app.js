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
    
    firstGrid.style.backgroundColor = "#8cccca";
    secondGrid.style.backgroundColor = "#35858B";
    thirdGrid.style.backgroundColor = "#35858B";
  });

secondGrid.addEventListener('click', () => {
    contenedorPrincipal.innerHTML = ''
    
    createDiv(20);

    firstGrid.style.backgroundColor = "#35858B";
    secondGrid.style.backgroundColor = "#8cccca";
    thirdGrid.style.backgroundColor = "#35858B";
  });

thirdGrid.addEventListener('click', () => {
    contenedorPrincipal.innerHTML = ''
    
    createDiv(30);

    firstGrid.style.backgroundColor = "#35858B";
    secondGrid.style.backgroundColor = "#35858B";
    thirdGrid.style.backgroundColor = "#8cccca";
  });

resetGrid.addEventListener('click', () => {
    contenedorPrincipal.innerHTML = ''
    firstGrid.style.backgroundColor = "#35858B";
    secondGrid.style.backgroundColor = "#35858B";
    thirdGrid.style.backgroundColor = "#35858B";
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
