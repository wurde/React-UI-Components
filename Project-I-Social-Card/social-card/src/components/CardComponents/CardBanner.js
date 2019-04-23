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

const CardBanner = () => {
  const src = ' https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'

  return (
    <img className="jsx-CardBanner" src={src}></img>
  )
}

/**
 * Export component
 */

module.exports = CardBanner
