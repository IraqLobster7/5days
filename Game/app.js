const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('.board');
let time = 0;
let score = 0;
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

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    };
});

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
};

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let currentTime = --time;
        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }
        setTime(currentTime);
    };
};


function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
};

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
};


function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const color = getRandomColor();
    circle.style.backgroundColor = color;
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    board.append(circle);
};

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function winGame() {
    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click();
        }
    }

    setInterval(kill, 42);
}