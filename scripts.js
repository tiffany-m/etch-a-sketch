const gridContainer = document.getElementById('grid-container');
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clear-btn');
const gridSize = document.getElementById('grid-size');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const colorPicked = document.getElementById('color-picker');

let color = 'black';
let size = 16;
let rows = size;
let columns = size;

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

        grid.appendChild(row);
    }
}

createGrid(rows, columns);

function updateSizeOnScreen() {
    gridSize.innerText = size;
}

function gridRemove() {
    const rows = document.querySelectorAll('.row');
    const cols = document.querySelectorAll('.column');

    cols.forEach(col => col.remove());
    rows.forEach(row => row.remove());
}

function newGrid(size1, size2) {
    gridRemove(); 
    createGrid(size1, size2); 
    gridContainer.appendChild(grid);
}

const cells = document.querySelectorAll('.column');

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = color;
    })
})

increaseBtn.addEventListener('click', ()=> {
    size++ 

    if(size > 64) size = 64;
    
    updateSizeOnScreen();
    newGrid(size, size);
})

decreaseBtn.addEventListener('click', () => {
    size--

    if (size < 8) size = 8;

    updateSizeOnScreen();
    newGrid(size, size);
})

clearBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
        console.log('clicked')
    })
})

colorPicked.addEventListener('change', (e) => {
    (color = e.target.value)
    console.log(e);
});