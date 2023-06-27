
let colorCell = function() {
  this.classList.add('colored');
}

function addCellListeners() {
  const cells = document.querySelectorAll('.grid-square');
  cells.forEach((cell) => { 
    cell.addEventListener('mouseenter', colorCell); 
  });
}


function createGrid(gridSize) {
  const container = document.querySelector('#grid');

  // create rows
  for(let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');

    let rowName = 'r' + (i+1);
    row.setAttribute('id', rowName);      // label each row div
    row.classList.add('row');

    // create cells
    for(let j = 0; j < gridSize; j++) {
      let cell = document.createElement('div');
      let columnName = 'c' + (j+1);
      cell.classList.add('grid-square', columnName);

      const gridWidth = getComputedStyle(container).width;
      let cellSize = parseInt(gridWidth) / gridSize;

      cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
      
      row.appendChild(cell);
    }

    container.appendChild(row);
  }

  addCellListeners();
}


function removeGrid() {
  const container = document.querySelector('#grid');
  const rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    row.childNodes.forEach((child) => {
      row.removeChild(child);
    });
    container.removeChild(row);
  });
}


let replaceGrid = function() {
  let size = parseInt(prompt("How many squares per side?", '16'));
  if((size >= 1) && (size <= 100)) {
    removeGrid();
    createGrid(size);
  }
}

const sizeButton = document.querySelector('#size-prompt');
sizeButton.addEventListener('click', replaceGrid);


let clearCanvas = function() {
  let cells = document.querySelectorAll('.grid-square');
  cells.forEach((cell) => {
    cell.classList.remove('colored');
  });
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearCanvas);


createGrid(16);