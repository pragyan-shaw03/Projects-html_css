const cells = document.querySelectorAll("#cell");
const restart = document.querySelector('.restart');
const stat = document.querySelector('.status');
let running = false, currentPlayer = 'X', count = 0;
arr = ['', '', '', '', '', '', '', '', ''];

initailize();

function initailize() {
    running = true;
    stat.textContent = `X's Turn`;
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restart.addEventListener('click', restartGame);
}

function cellClicked() {
    ind = this.getAttribute("ind");
    if (arr[ind] != '' || running == false) {
        return;
    }
    arr[ind] = currentPlayer;
    count++;
    this.textContent = currentPlayer;
    currentPlayer = (currentPlayer == 'X')? 'O' : 'X';
    checkWinner();
    if (running) stat.textContent = `${currentPlayer}'s Turn`;
}

function checkWinner() {
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let winner = 'X';
    for (let i = 0; i < wins.length; i++) {
        let i1 = wins[i][0], i2 = wins[i][1], i3 = wins[i][2];
        if (arr[i1] == arr[i2] && arr[i2] == arr[i3] && arr[i1] != '') {
            winner = arr[i1];
            running = false;
            break;
        }
    }
    if (!running) {
        stat.textContent = `${winner} WINS!`;
    } else if (count == 9) {
        stat.textContent = "IT's A TIE";
        running = false;
    }
}

function restartGame() {
    arr = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    stat.textContent = "X's Turn";
    cells.forEach(cell => cell.textContent="");
    running = true;
    count = 0;
}
