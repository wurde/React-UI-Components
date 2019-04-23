'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Footer.scss')

/**
 * Define component
 */

const Footer = () => {
  return (
    <div className="jsx-Footer">
      <div class="jsx-Footer__icon">
        <i className="far fa-comment fa-flip-horizontal"></i>
      </div>
      <div class="jsx-Footer__icon">
        <i className="fas fa-sync"></i> <span class="jsx-Footer__icon--padding-left">6</span>
      </div>
      <div class="jsx-Footer__icon">
        <i className="far fa-heart"></i> <span class="jsx-Footer__icon--padding-left">4</span>
      </div>
      <div class="jsx-Footer__icon">
        <i className="far fa-envelope"></i>
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Footer
