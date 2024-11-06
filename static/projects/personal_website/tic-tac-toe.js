document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tic-tac-toe-container');

    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let currentPlayer = 'X';
    let gameOver = false;

    const createBoard = () => {
        const table = document.createElement('table');

        for (let i = 0; i < 3; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement('td');
                cell.addEventListener('click', () => makeMove(i, j, cell));
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        container.appendChild(table);
    };

    const makeMove = (i, j, cell) => {
        if (board[i][j] === '' && !gameOver) {
            board[i][j] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                alert(`${currentPlayer} wins!`);
                gameOver = true;
            } else if (isBoardFull()) {
                alert("It's a tie!");
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    };

    const checkWin = (player) => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
            }
        }
        // Check columns
        for (let j = 0; j < 3; j++) {
            if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
                return true;
            }
        }
        // Check diagonals
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
        return false;
    };

    const isBoardFull = () => {
        for (let row of board) {
            for (let cell of row) {
                if (cell === '') {
                    return false;
                }
            }
        }
        return true;
    };

    createBoard();
});
