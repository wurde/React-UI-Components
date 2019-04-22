'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Button.css')

/**
 * Define component
 */

const NumberButton = (props) => {
  return (
    <div className="jsx-NumberButton">{props.text}</div>
  )
}

/**
 * Export component
 */

module.exports = NumberButton
