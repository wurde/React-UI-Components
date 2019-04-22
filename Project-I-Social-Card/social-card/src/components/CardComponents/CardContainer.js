'use strict'

/**
 * Dependencies
 */

const React = require('react')
const CardBanner = require('./CardBanner')
const CardContent = require('./CardContent')

/**
 * Import component styles
 */

require('./Card.css')

/**
 * Define component
 */

const CardContainer = () => {
  return (
    <a className="jsx-CardContainer" href="https://www.reactjs.org">
      <CardBanner />
      <CardContent />
    </a>
  )
}

/**
 * Export component
 */

module.exports = CardContainer
