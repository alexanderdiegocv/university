import { isHex, isInteger } from './changeBase/validateNumber.js'
import decimalToAny from './changeBase/decimalBaseToAnyBase/decimalToAny.js'

const changeBaseForm = document.getElementById('change-base__form')

const verifier = {
  number: false,
  currentBase: false,
  targetBase: false
}

/**
 * Show information about whether the target input value
 * @param {Boolean} test check the text of target
 * @param {Element} targetInput element to draw its info
 */
const drawInfo = (test, targetInput) => {
  const groupInput = targetInput.parentElement.parentElement
  if (test) {
    groupInput.classList.remove('form__group-incorrect')
    groupInput.classList.add('form__group-correct')
    groupInput.querySelector('i').classList.remove('fa-times-circle')
    groupInput.querySelector('i').classList.add('fa-check-circle')
  } else {
    groupInput.classList.remove('form__group-correct')
    groupInput.classList.add('form__group-incorrect')
    document.querySelector('i').classList.remove('fa-check-circle')
    document.querySelector('i').classList.add('fa-times-circle')
  }
  return test
}

const inputHandler = targetInput => {
  const value = targetInput.value
  if (targetInput.name === 'number') {
    verifier.number = drawInfo(isHex(value), targetInput)
  } else if (targetInput.name === 'current-base') {
    verifier.currentBase = drawInfo(isInteger(value) && parseInt(value) > 1, targetInput)
  } else if (targetInput.name === 'target-base') {
    const currentBase = document.getElementById('current-base')
    verifier.targetBase = drawInfo(
      isInteger(value) && value !== currentBase.value && parseInt(value) > 1,
      targetInput
    )
  }
}

changeBaseForm.addEventListener('keyup', evt => {
  const inputPressed = evt.target.closest('input')
  if (!inputPressed) return
  inputHandler(inputPressed)
})

changeBaseForm.addEventListener('blur', evt => {
  const inputPressed = evt.target.closest('input')
  if (!inputPressed) return
  inputHandler(inputPressed)
})

changeBaseForm.addEventListener('submit', evt => {
  evt.preventDefault()
  if (verifier.number && verifier.currentBase && verifier.targetBase) {
    document.getElementById('form__message').classList.remove('form__message-active')
    document.getElementById('form__success-message').classList.add('form__success-message-active')
    setTimeout(() => {
      document
        .getElementById('form__success-message')
        .classList.remove('form__success-message-active')
    }, 2000)
    document
      .querySelectorAll('.form__group')
      .forEach(group => group.classList.remove('form__group-correct'))

    const number = document.getElementById('number').value
    const currentBase = Number(document.getElementById('current-base').value)
    const targetBase = Number(document.getElementById('target-base').value)
    const result = document.getElementById('result')
    let numberResult
    console.log({ number, currentBase, targetBase })
    if (currentBase === 10) {
      numberResult = decimalToAny(targetBase, number)
    }

    result.value = numberResult.number
  } else {
    document.getElementById('form__message').classList.add('form__message-active')
  }
})
