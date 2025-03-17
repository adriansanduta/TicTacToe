const allSquares = document.querySelectorAll('.board__square');
const title = document.querySelector('.board__title');

let currentPlayer = "X";
let gameOver = false;
let board = new Array(9);

allSquares.forEach((square, i) => {
    square.addEventListener('click', () => {
        if (gameOver) {
            return;
        }

        square.innerHTML = currentPlayer;
        board[i] = currentPlayer;
        if (checkWin()) {
            title.innerHTML = `${currentPlayer} Wins!`;
            gameOver = true;
            return;
        }

        if (checkDraw()) {
        
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        title.innerHTML = `${currentPlayer}'s Turn`;
    });
});  

function checkDraw() {
  for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
          return false;
      }
  }
}

function checkWin() {
    const winningIndicies = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    for (let i = 0; i < winningIndicies.length; i++) {
        const matchingIndicies = winningIndicies[i];
        let symbol1 = board[ matchingIndicies[0]];
        let symbol2 = board[matchingIndicies[1]];
        let symbol3 = board[matchingIndicies[2]];

        if (!symbol1 || !symbol2 || !symbol3) {
            continue;
        }

        if (symbol1 === symbol2 && symbol2 === symbol3 ) {
            console.log('winner at', matchingIndicies);
            return true;
        }

}
}