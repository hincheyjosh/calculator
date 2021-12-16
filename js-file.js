const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b == 0 ? "Nope": a / b
const modulo = (a, b) => b == 0 ? "Nope": a % b

const clearAll = () => {
    currentInput = null
    previousInput = null
    currentOperator = null
    runningTotal = null
    updateDisplay()
}

const clear = () => currentInput = null

const updateDisplay = () => {
    currentInput === null ? lowerDisplay.textContent = '': lowerDisplay.textContent = currentInput 
    previousInput === null ? upperDisplay.textContent = '': lowerDisplay.textContent = previousInput
}

const lowerDisplay = document.querySelector(".lowerDisplay")
const upperDisplay = document.querySelector(".upperDisplay")

let currentInput = null
let previousInput = null
let currentOperator = null
let runningTotal = null
