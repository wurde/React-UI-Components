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
      <div className="row">
        <div className="col-12">
          <components.CalculatorDisplay text="0" />
        </div>
      </div>

      <div className="row">
        <div className="col-9 text-center border">
          <components.ActionButton text="clear" />
        </div>
        <div className="col-3 text-center border bg-red text-white">
          <components.ActionButton text="&#247;" />
        </div>
      </div>

      <div className="row">
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="7"/>
        </div>
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="8"/>
        </div>
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="9"/>
        </div>
        <div className="col-3 text-center border bg-red text-white">
          <components.ActionButton text="x" />
        </div>
      </div>

      <div className="row">
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="4"/>
        </div>
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="5"/>
        </div>
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="6"/>
        </div>
        <div className="col-3 text-center border bg-red text-white">
          <components.ActionButton text="-" />
        </div>
      </div>

      <div className="row">
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="1"/>
        </div>
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="2"/>
        </div>
        <div className="col-3 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="3"/>
        </div>
        <div className="col-3 text-center border bg-red text-white">
          <components.ActionButton text="+" />
        </div>
      </div>

      <div className="row">
        <div className="col-9 text-center border">
          <components.NumberButton buttonStyle="jsx-NumberButton" text="0"/>
        </div>
        <div className="col-3 text-center border bg-red text-white">
          <components.ActionButton text="=" />
        </div>
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
