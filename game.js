//inicar a variáveis

let board = [ "", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
//possibilidade de vencer o jogo
let winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let players = [];

function handleMove(position, player1, player2) {

    if (gameOver) {
        winnerName(player1, player2);
        return;
    }

    if (board[position] == '') {
        
        board[position] = symbols[playerTime];
        gameOver = isWin();

        if (gameOver == false) {
            
            playerTime = (playerTime == 0) ? 1 : 0;

        }
    }

        return gameOver;
    }


function isWin() {
   
    for (let i=0; i < winStates.length; i++) {

        let seq = winStates[i];
         //verificar as posições 
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            
            return true;
        }
    }
    return false;
}




setTimeout(() => {
    
    alert("Bem- vindos ao jogo da Velha! ");
    player1 = prompt("Jogador 1, digite seu nome:");
    player2 = prompt("Jogador 2, digite seu nome: ");
    players.push(player1, player2);
}, 50);


function myReseat() {
 
    location.reload();

}



