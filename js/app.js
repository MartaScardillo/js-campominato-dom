const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement);

const playBtnDOMElement = document.getElementById('play-btn')
console.log(playBtnDOMElement);

playBtnDOMElement.addEventListener('click', function() {
    gridDOMElement.innerHTML = ''

    for (let i = 0; i < 100; i++) {
        const n = i + 1;
        console.log(n)
        
        const htmlCell = '<div class="cell">' + n + '</div>'
        console.log(htmlCell);
    
        gridDOMElement.innerHTML += htmlCell
    }

    const cellDOMElements = document.querySelectorAll('.cell')
    console.log(cellDOMElements);

    for (let i = 0; i < cellDOMElements.length; i++) {
        const currentCellElement = cellDOMElements[i];

        currentCellElement.addEventListener('click', function() {
            console.log('Casella toccata: ' + currentCellElement.innerHTML );
            currentCellElement.classList.add('bg-blue')
        })   
    }
})