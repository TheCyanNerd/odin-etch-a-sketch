function createGrid() {
  const gridSize = 16;      // number of cells in a row/column
  const cellSize = 2;       // cell width/height in em

  const container = document.querySelector('#grid');

  // create rows
  for(let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');

    let rowName = 'r' + (i+1);
    row.setAttribute('id', rowName);      // label each row div
    row.classList.add('row');

    container.appendChild(row);
  }

}

createGrid();