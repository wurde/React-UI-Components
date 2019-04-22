'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Card.css')

/**
 * Define component
 */

const CardContent = () => {
  return (
    <div class="jsx-CardContent">
      <h3>Get started with React</h3>
      <p>
        React makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      <span>reactjs.org</span>
    </div>
  )
}

/**
 * Export component
 */

module.exports = CardContent
