'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Card.scss')

/**
 * Define component
 */

const CardContent = () => {
  return (
    <div className="jsx-CardContent">
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
