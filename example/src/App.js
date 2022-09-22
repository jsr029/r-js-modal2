import React, { useState } from 'react'
import Modal from 'r-js-modal2'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>r-js-react-modal2</h1>
      <button
        style={{
          width: '200px',
          display: 'block',
          margin: '0 auto',
          padding: '10px',
          background: 'none',
          border: 'none',
          backgroundColor: '#eee',
          fontSize: '20px',
          cursor: 'pointer'
        }}
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <Modal show={showModal} onClickCloseBtn={hideModal}>
        <h1>Employee saved !</h1>
      </Modal>
    </div>
  )
}

export default App
