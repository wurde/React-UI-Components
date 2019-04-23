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
      <i className="far fa-comment fa-flip-horizontal"></i>
      <i className="fas fa-sync"></i>
      <i className="far fa-heart"></i>
      <i className="far fa-envelope"></i>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Footer
