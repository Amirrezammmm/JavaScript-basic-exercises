const board = document.getElementById('board');
const status = document.getElementById('status');

let currentPlayer = 'X';
let cells = Array(9).fill(null);
let gameActive = true;


function createBoard() {
    board.innerHTML = '';
    cells.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    });
}

function handleCellClick(e) {
    const index = e.target.dataset.index;

    if (cells[index] || !gameActive) return;

    cells[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        status.textContent = `بازیکن ${currentPlayer} برنده شد!`;
        gameActive = false;
        return;
    }

    if (cells.every(cell => cell)) {
        status.textContent = 'بازی مساوی شد!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `نوبت: ${currentPlayer}`;
}

// بررسی برنده
function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // ردیف‌ها
        [0,3,6], [1,4,7], [2,5,8], // ستون‌ها
        [0,4,8], [2,4,6]           // مورب‌ها
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => cells[index] === currentPlayer);
    });
}

// ریست کردن بازی
function resetGame() {
    currentPlayer = 'X';
    cells = Array(9).fill(null);
    gameActive = true;
    status.textContent = `نوبت: ${currentPlayer}`;
    createBoard();
}

createBoard();
