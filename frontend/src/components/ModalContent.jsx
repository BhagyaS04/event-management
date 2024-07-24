import React from 'react';

const ModalContent = ({ onClose }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">Login/Sign up</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div className="modal-body">
        {/* Your login form content here */}
        <form>
          <label>Username:</label>
          <input type="text" />
          <br />
          <label>Password:</label>
          <input type="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;