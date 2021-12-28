const board = document.querySelector('#board');

const colors = [
    '#661155',
    '#551133',
    '#991155',
    '#dd3366',
    '#cc77aa',
    '#990066',
    '#ff55aa',
    '#880044',
    '#ee0066',
    '#ff0033',
    '#eeaa00',
    '#ffcc00',
    '#ffff00',
    '#ff7700',
    '#ff6600',
    '#ff2200',
    '#ff9900',
    '#ffcc11'
];

const SQUARES_NUMBER = 2400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
};

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #1d1d1d`;
}




function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}