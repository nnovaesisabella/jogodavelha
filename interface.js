document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => { 
        square.addEventListener('click', handleClick);
     })
})

function handleClick(event) {
    console.log(event.target);
    let square = event.target;
    let position = square.id;
     
    //mensagem de vitória colocar tempo para resposta 
    if (handleMove(position)) {
         updateSquares();
        setTimeout(() => {
            
            let vencedor = (playerTime == 0) ? players[0] : players[1];
            alert("Sucesso  " + vencedor + "! Você foi o vencedor....");
        }, 10);
   };
    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id; 
        let symbol = board[position];

        if (symbol != "") {
            square.innerHTML = `<div class= '${symbol}'></div>`
        }
     })
}



