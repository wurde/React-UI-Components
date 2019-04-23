'use strict'

/**
 * Dependencies
 */

const React = require('react')
const moment = require('moment')

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
      <h3>Lambda School</h3> <span>@LambdaSchool &#183; {moment().format('DD MMM').toLowerCase()}</span>
    </div>
  )
}

/**
 * Export component
 */

module.exports = HeaderTitle
