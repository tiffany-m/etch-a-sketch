const gridContainer = document.getElementById('grid-container');

let rows = 16;
let columns = 16;

function createGrid(numRows, numCols) {

    // create rows
    for (let i = 0; i < numRows; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        // create columns/individual cells
        for (let j = 0; j < numCols; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            // line to number cells
            // column.textContent = i + '-' + j;
            row.appendChild(column);
        }

        gridContainer.appendChild(row);
    }
}

createGrid(rows, columns);
