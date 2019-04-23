'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/')

/**
 * Import app styles
 */

require('./App.scss')

/**
 * Define component
 */

const App = () => {
  return (
    <div className="jsx-App">
      <components.HeaderContainer />
      <components.CardContainer />
      <components.Footer />
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
