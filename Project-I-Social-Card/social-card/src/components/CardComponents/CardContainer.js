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
    <div class="jsx-CardContainer">
      <CardBanner />
      <CardContent />
    </div>
  )
}

/**
 * Export component
 */

module.exports = CardContainer
