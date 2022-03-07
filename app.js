const btnColor = document.querySelector('#color');
const firstGrid = document.querySelector('#first-grid');
const secondGrid = document.querySelector('#second-grid');
const thirdGrid = document.querySelector('#third-grid');
const resetGrid = document.querySelector('#reset');

btnColor.addEventListener('click', () => {
    selectColor();
  });

  function selectColor() {
      console.log('click');
  };