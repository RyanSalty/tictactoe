

const gameBoard = (() => {
    const gameArray = new Array(9);
    const gameMessage = document.getElementById("msg"); 
    const gameTiles = document.getElementsByClassName("tile");
    let playerSymbol = 'X';
    let opponentSymbol = 'O';
    console.log(gameTiles);

    const clearBoard = () => {
        gameArray.length = 0;
        gameArray.length = 9;
        gameMessage.innerHTML = "Welcome to the game!";
    }

    const playerMove = (i) => {
        if (gameArray[i] === undefined){
            gameArray[i] = playerSymbol;
            opponentMove();
            gameMessage.innerHTML = "Please make your selection";
            console.log(gameArray);
        }
    }

    const opponentMove = () => {
        let success = false;
        let i = 0;
        let iteration = 1;
        while (success === false){
            i = Math.floor(Math.random() * 10);
            if (gameArray[i] === undefined){
                gameArray[i] = opponentSymbol;
                success = true;
            }
            iteration++;
        }
        console.log(iteration);
        printBoard();

    }

    const printBoard = () => {
        let i = 0;
        console.log("in printBoard");
        [].forEach.call(gameTiles, gameTile => {
            if (gameArray[i] !== undefined){
                gameTile.innerHTML = gameArray[i];
            }   
            i++;
    });


    const checkWin = () => {

    }
}


return{
    clearBoard,
    playerMove

}

})();

const player = (name, turnOrder, symbol, color) => {
    return { name, turnOrder, symbol, color};
};
