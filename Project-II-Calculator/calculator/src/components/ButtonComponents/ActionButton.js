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

const ActionButton = (props) => {
  return (
    <div className="jsx-ActionButton">{props.text}</div>
  )
}

/**
 * Export component
 */

module.exports = ActionButton
