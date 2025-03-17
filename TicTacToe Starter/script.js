const allSquares = document.querySelectorAll('.board__square');

let currentPlayer = "X";

allSquares.forEach((square, i) => {
    square.addEventListener('click', () => {
        square.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});    