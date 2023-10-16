function getArrayOfBombs(minRange, maxRange, number) {
    const bombsArray = [];

    while (bombsArray.length < number) {
        const n = getRandomBombs(minRange, maxRange);
        console.log(n);

        if (bombsArray.includes(n) === false) {
            bombsArray.push(n);
        }
    }

    return bombsArray;
}

function getRandomBombs(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

const playBtnDOMElement = document.getElementById('play-btn');
console.log(playBtnDOMElement);

let isGameOver = false;

playBtnDOMElement.addEventListener('click', function () {
    gridDOMElement.innerHTML = '';
    
    isGameOver = false

    const bombs = getArrayOfBombs(1, 100, 16);
    console.log(bombs);

    for (let i = 0; i < 100; i++) {
        const n = i + 1;
        console.log(n);

        const htmlCell = '<div class="cell">' + n + '</div>';
        console.log(htmlCell);

        gridDOMElement.innerHTML += htmlCell;
    }

    const cellDOMElements = document.querySelectorAll('.cell');
    console.log(cellDOMElements);

    for (let i = 0; i < cellDOMElements.length; i++) {
        let currentCellElement = cellDOMElements[i];

        currentCellElement.addEventListener('click', function () {
            if (!isGameOver) {
                console.log('Casella toccata: ' + currentCellElement.innerHTML);
                currentCellElement.classList.add('bg-blue');
    
                if (bombs.includes(parseInt(currentCellElement.innerHTML))) {
                    currentCellElement.classList.add('bg-darkred');
                    for (let i = 0; i < cellDOMElements.length; i++) {  
                        currentCellElement = cellDOMElements[i];
                        if (bombs.includes(parseInt(currentCellElement.innerHTML))) {
                            currentCellElement.classList.add('bg-red');
                        }
                    }
                    isGameOver = true;
                }
            }
        });
    }
});
