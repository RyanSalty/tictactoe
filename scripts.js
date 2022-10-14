

const gameBoard = (() => {
    const gameArray = new Array(9);
    const gameMessage = document.getElementById("msg"); 
    const gameTiles = document.getElementsByClassName("tile");
    const playArea = document.getElementById("game-board");
    let playerSymbol = 'X';
    let opponentSymbol = 'O';
    console.log(gameTiles);

    const clearBoard = () => {
        gameArray.length = 0;
        gameArray.length = 9;
        gameMessage.innerHTML = "Welcome to the game!";
        printBoard();
        playArea.classList.remove("disabled");

    }

    const playerMove = (i) => {
        if (gameArray[i] === undefined){
            gameArray[i] = playerSymbol;
            opponentMove();
            gameMessage.innerHTML = "Please make your selection";
            console.log(gameArray);
        }
        checkWin();
    }

    const opponentMove = () => {
        let success = false;
        let i = 0;
        while (success === false){
            i = Math.floor(Math.random() * 9);
            if (gameArray[i] === undefined){
                gameArray[i] = opponentSymbol;
                success = true;
            }
        }
        checkWin();

    }

    const printBoard = () => {
        let i = 0;
        console.log("in printBoard");
        [].forEach.call(gameTiles, gameTile => {
            if (gameArray[i] !== undefined){
                gameTile.innerHTML = gameArray[i];
            }   else gameTile.innerHTML = "";
            i++;
        });
    }

    const newPlayer = () => {

    }


    const checkWin = () => {
       let winningSymbol = "";
       printBoard();
       if (gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]){
            winningSymbol = gameArray[0];
        } else if (gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]){
            winningSymbol = gameArray[3];
        } else if (gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8]){
            winningSymbol = gameArray[6];
        } else if (gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]){
            winningSymbol = gameArray[0];
        } else if (gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7]){
            winningSymbol = gameArray[1];
        } else if (gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]){
            winningSymbol = gameArray[2];
        } else if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]){
            winningSymbol = gameArray[0];
        } else if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]){
            winningSymbol = gameArray[2];
        }
        winMsg(winningSymbol);
        
    }

    const winMsg = (winSym) => {
        switch (winSym){
            case "X":
                gameMessage.innerHTML = "X Wins!";
                playArea.classList.add("disabled");
                break;
            case "O":
                gameMessage.innerHTML = "O Wins!"
                playArea.classList.add("disabled");
                break;

        }
    }


return{
    clearBoard,
    playerMove,
    newPlayer

}

})();

const player = (name, turnOrder, symbol, color) => {
    return { name, turnOrder, symbol, color};
};

