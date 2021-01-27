import React from 'react';
import '../styles/button.css';

const Button = ({ title, onPressButton, disabled, type }) => {
    return (
        <a
            onClick={onPressButton}
            href="#"
            className={`button ${disabled && "button-disabled"} ${type === "warn" && "button-warn"}`}
        >
            {title}
        </a>
    );
}
export default Button