function createGrid() {
  const gridSize = 16;      // number of cells in a row/column

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

createGrid();