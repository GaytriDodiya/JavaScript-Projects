const randomNum = parseInt(Math.random() * 100 + 1)

let guessField = document.querySelector('#guessInput')
let submit = document.querySelector('#subt')
let gusessSlot = document.querySelector('.guesses')
let result = document.querySelector('.lastResult')
let startOver = document.querySelector('.resultParas')
let lowOrHi = document.querySelector('.lowOrHi')

let p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true

if (playGame) {

    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guesses = guessField.value
        if (guesses !== '') {
            validGuess(guesses)
        }

    })
}


function validGuess(guesses) {
    if (isNaN(guesses)) {
        alert("please enter a valid number ")
    }
    else if (guesses < 1) {
        alert("please enter a number bigger then 1")
    }
    else if (guesses > 100) {
        alert("please enter a smaller number then 100")
    }
    else {
        prevGuess.push(guesses)
        if (numGuess === 11) {
            displayGuess(guesses)
            displayMsg(`Game over, Random number was ${randomNum}`)
            endGame();
        }
        else {
            displayGuess(guesses)
            checkGuess(guesses)
        }
    }
}


function checkGuess(guesses) {

    if (guesses === randomNum) {
        displayMsg("you guested right")
    }
    else if (guesses < randomNum) {
        displayMsg("number is too small")
    }
    else if (guesses > randomNum) {
        displayMsg("number is too lanrge")
    }

}
function displayGuess(guesses) {
    guessField.value = '';
    gusessSlot.innerHTML += `${guesses}`
    numGuess++
    result.innerHTML = `${11 - numGuess}`
}

function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    guessField.value = ''
    guessField.setAttribute('disabled', '')
    p.classList.add(button)
    p.innerHTML = '<h2 id="newgame">start a new game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector("#newgame")
    newGameButton.addEventListener('click', function (e) {
        guessField = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        gusessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}