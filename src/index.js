import React, { Fragment } from 'react'
import Backdrop from './backdrop'

const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  fontFamily: 'TimesNewRoman'
}

const modalStyles = {
  maxWidth: '500px',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  width: '100%',
  border: '1px solid #ddd',
  backgroundColor: 'white',
  margin: '100px auto 0',
  zIndex: 1,
  position: 'relative',
  padding: '15px 30px',
  borderRadius: '8px',
  boxShadow: '0 0 10px #000',
  textAlign: 'center'
}

const closeBtnStyles = {
  position: 'absolute',
  right: '-35px',
  top: '-40px',
  background: 'none',
  borderRadius: '50%',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer',
  color: 'white',
  background: 'black',
  padding: '5px',
  width: '40px'
}

const Modal = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalStyles}>
            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Modal