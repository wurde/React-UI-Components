'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./index')

/**
 * Import component styles
 */

require('./Header.scss')

/**
 * Define component
 */

const HeaderContainer = () => {
  return (
    <div className="jsx-HeaderContainer">
      <components.ImageThumbnail />
      <div className="jsx-HeaderContainer__text--padding-left">
        <components.HeaderTitle />
        <components.HeaderContent />
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = HeaderContainer
