import React from 'react';
import iconClose from '../images/icon-close.svg';
import rules from '../images/image-rules.svg';

function Rules() {
  const openModal = (e) => {
    document.getElementById("myModal").style.display = "flex"
  }

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none"
  }

  window.onclick = function(e) {
    let modal = document.getElementById("myModal")
    if (e.target === modal) {
      modal.style.display = "none"
    }
  }

  return (
    <div className="Rules">
      <button className="Rules-btn" type="button" onClick={openModal}>rules</button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-content-head">
            <span className="modal-content-head-text">rules</span>
            <img src={iconClose} alt="close" onClick={closeModal}/>
          </div>
          <img src={rules} alt="rules" />
        </div>
      </div> 
    </div>
  )
}

export default Rules;