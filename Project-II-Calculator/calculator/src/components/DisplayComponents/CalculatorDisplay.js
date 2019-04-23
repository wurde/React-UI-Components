'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Display.scss')

/**
 * Define component
 */

const CalculatorDisplay = (props) => {
  return (
    <div className="jsx-CalculatorDisplay">{props.text}</div>
  )
}

/**
 * Export component
 */

module.exports = CalculatorDisplay
