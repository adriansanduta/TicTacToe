const allSquares = document.querySelectorAll('.board__square');
const title = document.querySelector('.board__title');

let currentPlayer = "X";

let board = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];

allSquares.forEach((square, i) => {
    square.addEventListener('click', () => {
        square.innerHTML = currentPlayer;

        checkWin();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        title.innerHTML = `${currentPlayer}'s Turn`;
    });
});  

function checkWin() {
    const winningIndicies = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    for (let i = 0; i < winningIndicies.length; i++) {
        const matchingIndicies = winningIndicies[i];
}