const boxes = Array.from(document.getElementsByClassName('box'));

const playText = document.getElementById('playText');

const restartBtn = document.getElementById('restartBtn');

const spaces = [null,null,null,null,null,null,null,null,null];
const O_text = 'O';
const X_text = 'X';
let currentplayer = X_text;

const drawBoard = () => {
    boxes.forEach((box,index) => {
        let styleString = ' ';
        if(index < 3) {
            styleString += 'border-bottom: 3px solid var(--purple);';
        }
        if(index%3 == 0) {
            styleString += 'border-right: 3px solid var(--purple);';
        }
        if(index%3 == 2) {
            styleString += 'border-left: 3px solid var(--purple);';
        }
        if(index > 5) {
            styleString += 'border-top: 3px solid var(--purple);';
        }
        box.style = styleString;
        box.addEventListener('click',boxClicked);
    });
};

const boxClicked = (e) => {
    const id = e.target.id;
    if(!spaces[id]) {
        spaces[id] = currentplayer;
        e.target.innerText = currentplayer;
    }
    if(playerHasWon()) {
        console.log(`Harsh`);
        playText.innerText = `${currentplayer} has won!`;
        return;
    }
    currentplayer = currentplayer == X_text ? O_text : X_text;
};

const playerHasWon = () => {
    if(spaces[0] == currentplayer) {
        if(spaces[1] == spaces[2] && spaces[0] == spaces[1]) {
            return true;
        }
        if(spaces[3] == spaces[6] && spaces[3] == spaces[0]) {
            return true;
        }
        if(spaces[4] == spaces[8] && spaces[4] == spaces[0]) {
            return true;
        }
    }
    if(spaces[8] == currentplayer) {
        if(spaces[5] == spaces[2] && spaces[2] == spaces[8]) {
            return true;
        }
        if(spaces[7] == spaces[6] && spaces[7] == spaces[8]) {
            return true;
        }
    }
    if(spaces[4] == currentplayer) {
        if(spaces[1] == spaces[4] && spaces[1] == spaces[7]) {
            return true;
        }
        if(spaces[3] == spaces[4] && spaces[3] == spaces[5]) {
            return true;
        }
    }
    if(spaces[2] == currentplayer) {
        if(spaces[2] == spaces[4] && spaces[4] == spaces[6]) {
            return true;
        }
    }
};

restartBtn.addEventListener('click', () => {
    spaces.forEach((space,index) => {
        spaces[index] = null;
    });
    boxes.forEach(box => {
        box.innerText = ' ';
    });
    playText.innerText =  `Let's Play`;
    currentplayer = X_text;
});

drawBoard();