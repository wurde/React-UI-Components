'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Button.scss')

/**
 * Define click handler
 */

const clickHandler = event => {
  let num = event.currentTarget.dataset.number
  let display = document.querySelector('.jsx-CalculatorDisplay')
  display.textContent = num
}

/**
 * Define component
 */

const NumberButton = (props) => {
  return (
    <button onClick={clickHandler} className={props.buttonStyle} data-number={props.text}>{props.text}</button>
  )
}

/**
 * Export component
 */

module.exports = NumberButton
