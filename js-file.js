const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => (a * b).toFixed(1)
const divide = (a, b) => b == 0 ? "Nope": (a / b).toFixed(1)
const modulo = (a, b) => b == 0 ? "Nope": a % b

const clearAll = () => {
    currentInput = null
    previousInput = null
    currentOperator = null
    runningTotal = null
    updateDisplay()
}

const clearCurrent = () => {
    currentInput = null
    updateDisplay()
}

const updateDisplay = () => {
    currentInput === null ? lowerDisplay.textContent = '': lowerDisplay.textContent = currentInput 
    previousInput === null ? upperDisplay.textContent = '': upperDisplay.textContent = previousInput
}

const operate = (number1, number2, operation) => {
    if (operation === 'plus') {
        return add(number1, number2)
    } else if (operation === 'minus') {
        return subtract(number1, number2)
    } else if (operation === 'multiply') {
        return multiply(number1, number2)
    } else if (operation === 'divide') {
        return divide(number1, number2)
    } else if (operation === 'modulo') {
        return modulo(number1, number2)
    }
}

let currentInput = null
let previousInput = null
let currentOperator = null
let runningTotal = null

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll('.operator')
const negative = document.getElementById("negative")
const lowerDisplay = document.querySelector(".lowerDisplay")
const upperDisplay = document.querySelector(".upperDisplay")
const equals = document.querySelector(".equals")
const decimal = document.querySelector(".decimal")



numbers.forEach(number => {
    number.addEventListener('click', function() {
        if (currentInput === null) {
            currentInput = this.value
            updateDisplay()
        } else {
            if (currentInput.length < 14) {
                currentInput += this.value
                updateDisplay()
            }
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', function() {
        if (currentOperator === null) {
            currentOperator = this.value
            previousInput = currentInput
            currentInput = null
            updateDisplay()
        } else {
            runningTotal = operate(Number(previousInput), Number(currentInput), currentOperator)
            previousInput = runningTotal
            currentInput = null
            currentOperator = this.value
            updateDisplay()
        }
    })
})

equals.addEventListener('click', function() {
    runningTotal = operate(Number(previousInput), Number(currentInput), currentOperator)
    currentInput = runningTotal
    currentOperator = null
    previousInput = null
    updateDisplay()
})

negative.addEventListener('click', function () {
    currentInput = Number(currentInput) * -1
    updateDisplay()
})

decimal.addEventListener('click', function () {
    if (currentInput !== null) {
        if (!currentInput.includes('.')) {
            currentInput += this.value
            updateDisplay()
        }
    } else {
        currentInput = '.'
        updateDisplay()
    }
})