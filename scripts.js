const gridContainer = document.getElementById('grid-container');
const grid = document.getElementById('grid');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const colorPicked = document.getElementById('color-picker');
const clearBtn = document.getElementById('clear-btn');
const gridSizeText = document.getElementById('grid-size-text');
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

        gridContainer.appendChild(row);
    }
}

// create default grid and add proper eventListeners to squares
createGrid(size);
addColorToSquares();
clearGrid();

function updateSizeOnScreen() {
    gridSizeText.innerText = size;
}

function gridRemove() {
    const rows = document.querySelectorAll('.row');
    const cols = document.querySelectorAll('.column');

    cols.forEach(col => col.remove());
    rows.forEach(row => row.remove());
}

function createNewGrid(numRowsCols) {
    gridRemove(); 
    createGrid(numRowsCols); 
    addColorToSquares();
    clearGrid();
}

function addColorToSquares() {
    const squares = document.querySelectorAll('.column');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
    })
}

function clearGrid() {
    const squares = document.querySelectorAll('.column');

    clearBtn.addEventListener('click', () => {
        squares.forEach(square => {
            square.style.backgroundColor = 'white';
        })
    })
}

increaseBtn.addEventListener('click', ()=> {
    size++ 

    if(size > 64) size = 64;
    
    updateSizeOnScreen();
    createNewGrid(size);
})

decreaseBtn.addEventListener('click', () => {
    size--

    if (size < 8) size = 8;

    updateSizeOnScreen();
    createNewGrid(size, size);
})

colorPicked.addEventListener('change', (e) => {
    (color = e.target.value)
    console.log(e);
});