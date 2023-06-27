createGrid(16);

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
      let div = document.createElement('div');
      let columnName = 'c' + (j+1);
      div.classList.add('grid-square', columnName);
      
      row.appendChild(div);
    }

    container.appendChild(row);
  }
}


let colorCell = function() {
  this.classList.add('colored');
}

const cells = document.querySelectorAll('.grid-square');
cells.forEach((cell) => { 
  cell.addEventListener('mouseenter', colorCell); 
});


function removeGrid() {
  const container = document.querySelector('#grid');
  container.childNodes.forEach((child) => container.removeChild(child));
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
