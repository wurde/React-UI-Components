'use strict'

/**
 * Dependencies
 */

const React = require('react')
const ImageThumbnail = require('./ImageThumbnail')
const HeaderTitle = require('./HeaderTitle')
const HeaderContent = require('./HeaderContent')

/**
 * Import component styles
 */

require('./Header.css')

/**
 * Define component
 */

const HeaderContainer = () => {
  return (
    <div class="jsx-HeaderContainer">
      <ImageThumbnail />
      <div class="jsx-HeaderWrapper">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = HeaderContainer
