'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Header.css')

/**
 * Define component
 */

const HeaderContent = () => {
  return (
    <div className="jsx-HeaderContent">
      <p>
        Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
      </p>
    </div>
  )
}

/**
 * Export component
 */

module.exports = HeaderContent
