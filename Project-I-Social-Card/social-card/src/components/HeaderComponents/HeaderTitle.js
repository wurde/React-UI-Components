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

const HeaderTitle = () => {
  return (
    <div className="jsx-HeaderTitle">
      <h3>Lambda School</h3> <span>@LambdaSchool &#183; 26 jan</span>
    </div>
  )
}

/**
 * Export component
 */

module.exports = HeaderTitle
