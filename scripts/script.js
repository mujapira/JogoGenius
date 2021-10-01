//rgb(223, 194, 163)
//rgb(136, 111, 97)
//rgb(92, 78, 70)
//rgb(201, 120, 120)
//rgb(184, 170, 159)

//0-green
//1-orange
//2-brown
//3-blue

let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue2');
const orange = document.querySelector('.orange2');
const green = document.querySelector('.green2');
const brown = document.querySelector('.brown2');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 200);
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return orange;
    } else if (color == 2) {
        return brown;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu!\nClique em OK para reinicar!`)
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
orange.onclick = () => click(1);
brown.onclick = () => click(2);
blue.onclick = () => click(3);

green.addEventListener('click', click(0));
orange.addEventListener('click', click(1));
brown.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

playGame();
