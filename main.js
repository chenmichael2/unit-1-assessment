console.log("main.js is scripted");
let numberAnswer = document.querySelector('.answer');
let minusButton = document.querySelector('.minus');
let inputBox = document.querySelector('.input');
let plusButton = document.querySelector('.plus');



let answer = 0;
numberAnswer.textContent = answer;

minusButton.addEventListener('click', subtract);
plusButton.addEventListener('click', add);

function subtract() {
    const value = inputBox.value;
    let newNumber = answer - value;
    numberAnswer.innerHTML = newNumber;
    answer = newNumber;
};

function add() {
    const value1 = inputBox.value;
    let newNumber1 = +answer + +value1;
    numberAnswer.innerHTML = newNumber1;
    answer = newNumber1;
}; 

minusButton.addEventListener('mouseover', mouseOverMinus);
plusButton.addEventListener('mouseover', mouseOverPlus);

function mouseOverMinus() {
    document.querySelector('.minus').classList.add('mouse');
}
function mouseOverPlus() {
    document.querySelector('.plus').classList.add('mouse');
}

minusButton.addEventListener('mouseout', mouseOutMinus);
plusButton.addEventListener('mouseout', mouseOutPlus);


function mouseOutMinus() {
    document.querySelector('.minus').classList.remove('mouse');
}
function mouseOutPlus() {
    document.querySelector('.plus').classList.remove('mouse');
};