'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Header.scss')

/**
 * Define component
 */

const ImageThumbnail = () => {
  let src = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'

  return (
    <img className="jsx-ImageThumbnail" src={src}></img>
  )
}

/**
 * Export component
 */

module.exports = ImageThumbnail
