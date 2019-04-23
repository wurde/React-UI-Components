'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./index')

/**
 * Import component styles
 */

require('./Card.scss')

/**
 * Define component
 */

const CardContainer = () => {
  return (
    <a className="jsx-CardContainer" href="https://www.reactjs.org">
      <components.CardBanner />
      <components.CardContent />
    </a>
  )
}

/**
 * Export component
 */

module.exports = CardContainer
