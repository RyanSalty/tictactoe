

const gameBoard = (() => {

    //Variable declarations
    const gameArray = new Array(9);
    const gameMessage = document.getElementById("msg"); 
    const gameTiles = document.getElementsByClassName("tile");
    const playArea = document.getElementById("game-board");
    const playerName = document.getElementById("player-name");
    const playerTurn = document.querySelectorAll('input[name="turn-order"]');
    const playerSymbol = document.querySelectorAll('input[name="symbol"]');
    let currentPlayer;

    //Resets game board and removes disabled class from playArea
    const clearBoard = () => {
        gameArray.length = 0;
        gameArray.length = 9;
        gameMessage.innerHTML = "Please make your selection " + currentPlayer.name;
        printBoard();
        playArea.classList.remove("disabled");

    }

    //Handles the player move and checks for win, if not calls opponentMove
    const playerMove = (i) => {
        console.log(currentPlayer);
        if (gameArray[i] === undefined){
            gameArray[i] = currentPlayer.symbol;
            if (!checkWin()){
                opponentMove();
            }
        }
    }

    //Handles opponent move and checks for win
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

    //Prints the data in the array onto the playArea
    const printBoard = () => {
        let i = 0;
        [].forEach.call(gameTiles, gameTile => {
            if (gameArray[i] !== undefined){
                gameTile.innerHTML = gameArray[i];
            }   else gameTile.innerHTML = "";
            i++;
        });
    }

    

    //Checks if there are three in a row anywhere in the playArea
    //Calls winMsg and disables playArea if true
    const checkWin = () => {
       let winningSymbol = "";
       printBoard();

       if(!gameArray.includes(undefined)){
        winningSymbol = "Draw";
        }
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
        
        if (winningSymbol === "" || winningSymbol === undefined){
            return false;
        } else {
            playArea.classList.add("disabled");
            return true;
        }
        
    }

    //Prints win message 
    const winMsg = (winSym) => {

        switch (winSym){
            case "X":
                if (currentPlayer.symbol === "X"){
                    gameMessage.innerHTML = currentPlayer.name + " Wins!";
                } else gameMessage.innerHTML = "Opponent Wins!";
                break;
            case "O":
                if (currentPlayer.symbol === "O"){
                    gameMessage.innerHTML = currentPlayer.name + " Wins!";
                } else gameMessage.innerHTML = "Opponent Wins!";
                break;
            case "Draw":
                gameMessage.innerHTML = "Draw!";
                break;
            default: 
                gameMessage.innerHTML = "Please make your selection " + currentPlayer.name;
                break;

        }
    }

    //creates a new player using the Player factory and updates
    //the currentPlayer with the new Player object

    //Prints new board to initialize game
    //If turnOrder is second, immediately calls opponent turn to start the game.
    const newPlayer = () => {
        console.log("in new player");
        let name = playerName.value;
        let turn;
        let symbol;
        for (const i of playerTurn){
            if (i.checked){
               turn = i.value;
            }
        }
        for (const i of playerSymbol){
            if (i.checked){
                symbol = i.value.toUpperCase();
            }
        }

        currentPlayer = Player(name, turn, symbol);
        clearBoard();

        if (symbol === "X"){
            opponentSymbol = "O";
        } else {opponentSymbol = "X"};

        if (turn === "second"){
            opponentMove();
        }
    }


return{
    clearBoard,
    playerMove,
    newPlayer

}

})();

//Player factory
const Player = (name, turnOrder, symbol) => {
    return { name, turnOrder, symbol};
};

