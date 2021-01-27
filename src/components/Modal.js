import React from 'react';
import '../styles/modal.css'

const Modal = ({ title, description, points = [], onClose }) => (
    <div className="modal-wrapper">
        <div onClick={onClose} className="modal-close-wrapper">
            <p>x</p>
        </div>
        <div className="modal-container">
            <p className="modal-title">{title}</p>
            <p className="modal-description">{description}</p>

            <ul>
                {
                    points.map((item, pos) => (
                        <li key={pos}>{item}</li>
                    ))
                }

            </ul>
        </div>
    </div>
)

export default Modal;