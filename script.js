let nClicks = 0;
let namePlayer1 = "Player1";
let namePlayer2 = "Player2";
let nWinsPlayer1 = 0;
let nWinsPlayer2 = 0;
let alreadyWin = 0;

function changeName(id) {
    if (!document.getElementById('player'+id).value == "") {
        document.getElementById('name'+id).innerHTML = document.getElementById('player'+id).value;
    }
    if (id == '1') {
        namePlayer1 = document.getElementById('player'+id).value;
    } else {
        namePlayer2 = document.getElementById('player'+id).value;
    }
    document.getElementById('player'+id).value= "";
}

function changeValue(id) {
    if (document.getElementById(id).value == "" && nClicks % 2 != 0 && alreadyWin == 0) {
        ++nClicks;
        document.getElementById(id).value= "0";
        verifyWin(id, namePlayer2);
    } else if (document.getElementById(id).value == "" && nClicks % 2 == 0 && alreadyWin == 0) {
        ++nClicks;
        document.getElementById(id).value= "X";
        verifyWin(id, namePlayer1);
    }
}

function verifyWin(id, winner) {
    let varX = document.getElementById(id).dataset.x;
    let varY = document.getElementById(id).dataset.y;
    let winn = 0;
    for (let x = 0; x <= 2; ++x){
        if(document.getElementById(id).value == document.getElementById('x' + x + 'y' + varY).value) {
            ++winn;
        }
    }
    if (winn == 3) {
        declareWinner(winner);
        return;
    }
    winn = 0;
    for (let y = 0; y <= 2; ++y) {
        if (document.getElementById(id).value == document.getElementById('x' + varX + 'y' + y).value) {
            ++winn;
        }
    }
    if (winn == 3) {
        declareWinner(winner);
        return;
    }
    winn = 0;
    for (let x = 0, y = 2; x <= 2 && y >= 0; ++x, --y) {
        if (document.getElementById(id).value == document.getElementById('x' + x + 'y' + y).value) {
            ++winn;
        }
    }
    if (winn == 3) {
        declareWinner(winner);
        return;
    }
    winn = 0;
    for (let x = 0, y = 0; x <= 2 && y <= 2; ++x, ++y) {
        if (document.getElementById(id).value == document.getElementById('x' + x + 'y' + y).value) {
            ++winn;
        }
    }
    if (winn == 3) {
        declareWinner(winner);
        return;
    } else if (nClicks == 9 && alreadyWin == 0) {
        declareTie();
    }
}

function declareWinner(winner) {
    document.getElementById('gameWinner').innerHTML = `
    <center>
        ${winner} is the Winner
    </center>
    `;
    ++alreadyWin;
    if (winner == namePlayer1) {
        ++nWinsPlayer1;
        document.getElementById('player1Result').innerHTML = nWinsPlayer1;
    } else if (winner == namePlayer2) {
        ++nWinsPlayer2;
        document.getElementById('player2Result').innerHTML = nWinsPlayer2;
    }
}

function declareTie() {
    document.getElementById('gameWinner').innerHTML = `
    <center>
        Tie!
    </center>
    `;
    ++alreadyWin;
}

function restartGame() {
    namePlayer1 = 'Player1';
    namePlayer2 = 'Player2';
    document.getElementById('name1').innerHTML = namePlayer1;
    document.getElementById('name2').innerHTML = namePlayer2;
    nClicks = 0;
    for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
            document.getElementById('x'+x+'y'+y).value= "";
        }
    }
    nWinsPlayer1 = 0;
    document.getElementById('player1Result').innerHTML = nWinsPlayer1;
    nWinsPlayer2 = 0;
    document.getElementById('player2Result').innerHTML = nWinsPlayer2;
    alreadyWin = 0;
    document.getElementById('gameWinner').innerHTML = ``;
}
function playAgain() {
    nClicks = 0;
    for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
            document.getElementById('x'+x+'y'+y).value= "";
        }
    }
    document.getElementById('gameWinner').innerHTML = ``;
    alreadyWin = 0;
}