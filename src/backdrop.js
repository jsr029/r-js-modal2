import React from 'react'

const backdropStyles = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.472)'
}

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} style={backdropStyles} />
}

export default Backdrop