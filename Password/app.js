const pwEl = document.querySelector('#pw');
const copyEl = document.querySelector('#copy');
const lenEl = document.querySelector('#len');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const symbolEl = document.querySelector('#symbol');
const numberEl = document.querySelector('#number');
const generateEl = document.querySelector('#generate');

const numbers = "0123456789";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "~!@#$%^&*()_+|?/':;<>,.*`";

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
};

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
};

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
};

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
};

function generatePassword() {
    const len = lenEl.value;
    let password = "";
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
};

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUpperCase());
    }
    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if (numberEl.checked) {
        xs.push(getNumber());
    }
    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);
copyEl.addEventListener('click', () => {
    const textArea = document.createElement('textArea');
    const password = pwEl.innerText;
    if (!password) {
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('password copied to clipboard')
});