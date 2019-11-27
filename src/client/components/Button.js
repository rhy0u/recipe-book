import React from 'react'
import MaterialUIButton from '@material-ui/core/Button'

const Button = ({ children, type, disabled, onClick, fullWidth, ...props }) => {
  return (
    <MaterialUIButton
      variant="contained"
      color="primary"
      fullWidth={fullWidth}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </MaterialUIButton>
  )
}

export default Button
