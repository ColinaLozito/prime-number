import React, { useState } from 'react';
import '../styles/toggle.css';

const Toggle = ({ onToggle, isToggle }) => {
    const [toggleButon, setToggleButon] = useState(isToggle || false);

    const onPressButton = () => {
        setToggleButon(!toggleButon);
        onToggle(!isToggle);
    }

    return (
        <div onClick={onPressButton} className="toggle-wrapper">
            <p>
                {`${toggleButon ? "hide" : "display"} table`}
            </p>
            <span>{toggleButon ? "▲" : "▼"}</span>
        </div>
    )
}

export default Toggle;