'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Import component styles
 */

require('./Footer.scss')

/**
 * Define click handler
 */

const clickHandler = event => {
  switch(event.currentTarget.dataset.action) {
    case 'comment':
      event.currentTarget.style.backgroundColor = "blue"
      break
    case 'sync':
      event.currentTarget.style.backgroundColor = "green"
      break
    case 'like':
      event.currentTarget.style.backgroundColor = "orange"
      break
    case 'mail':
      event.currentTarget.style.backgroundColor = "red"
      break
    default:
      // Do nothing
      break
  }
}

/**
 * Define component
 */

const Footer = () => {
  return (
    <div className="jsx-Footer">
      <button onClick={clickHandler} className="jsx-Footer__icon" data-action="comment">
        <i className="far fa-comment fa-flip-horizontal"></i>
      </button>
      <button onClick={clickHandler} className="jsx-Footer__icon" data-action="sync">
        <i className="fas fa-sync"></i> <span className="jsx-Footer__icon--padding-left">6</span>
      </button>
      <button onClick={clickHandler} className="jsx-Footer__icon" data-action="like">
        <i className="far fa-heart"></i> <span className="jsx-Footer__icon--padding-left">4</span>
      </button>
      <button onClick={clickHandler} className="jsx-Footer__icon" data-action="mail">
        <i className="far fa-envelope"></i>
      </button>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Footer
