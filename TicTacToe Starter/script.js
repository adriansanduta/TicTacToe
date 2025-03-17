const allSquares = document.querySelectorAll('.board__square');
const title = document.querySelector('.board__title');

let currentPlayer = "X";

allSquares.forEach((square, i) => {
    square.addEventListener('click', () => {
        square.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        title.innerHTML = `${currentPlayer}'s Turn`;
    });
});    