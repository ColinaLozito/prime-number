import React, { useState } from 'react'
import Button from './Button';
import '../styles/input.css';

const Input = ({ submit }) => {
    const [inputValue, setInputValue] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const onChangeInput = ({ target: { value } }) => {
        const valueToNumber = parseInt(value, 10);
        if (valueToNumber > 10000 || !value || valueToNumber < 1 || !Number.isInteger(valueToNumber)) {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }

        if (isNaN(valueToNumber)) {
            setInputValue("")
        } else {
            setInputValue(valueToNumber)
        }

    }

    const onPressSubmit = () => {
        if (!buttonDisabled) {
            submit(parseInt(inputValue, 10));
            setInputValue("");
            setButtonDisabled(true);
        }
    }

    return (
        <div className="input-component">
            <input placeholder="e.g: 1" className="input-field" value={inputValue} onChange={onChangeInput} maxLength={5} />
            <Button title="SEND" onPressButton={onPressSubmit} disabled={buttonDisabled} />
        </div>
    )
};

export default Input;