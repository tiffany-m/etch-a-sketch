const gridContainer = document.getElementById('grid-container');
const grid = document.getElementById('grid');
let color = '#00C5CD';
let size = 24;

function createGrid(numRowsCols) {

    // create rows
    for (let i = 0; i < numRowsCols; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        // create columns/individual squares
        for (let j = 0; j < numRowsCols; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            // line to number squares for debugging
            // column.textContent = i + '-' + j;
            row.appendChild(column);
        }

        grid.appendChild(row);
    }
}

// create default grid and add proper eventListeners to squares
createGrid(size);
