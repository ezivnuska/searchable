import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ children, handleClick, ...rest }) => {
  if (handleClick) {
    return (
      <button
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    )
  }

  return <button {...rest}>{children}</button>
}

Button.propTypes = ({
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
})

export default Button
