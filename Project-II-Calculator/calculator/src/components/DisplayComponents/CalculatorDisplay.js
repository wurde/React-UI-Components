'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Display.css')

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
