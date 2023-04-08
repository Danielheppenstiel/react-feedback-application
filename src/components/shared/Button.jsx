import PropTypes from 'prop-types'

function Button({isDisabled, type, version}) {
    
  return (
    <button type={type} disabled={isDisabled} className={`submit-btn btn-${version}`}>
        SEND
    </button>
  )
}

Button.defaultProps = {
  isDisabled: true,
  type: 'primary',
};

export default Button