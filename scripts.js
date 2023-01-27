const gridContainer = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');
const newGridSize = document.getElementById('new-grid-size');

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

const cells = document.querySelectorAll('.column');

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('color');
    })
})

clearBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.classList.remove('color');
    })
})

