import React from 'react';
import '../styles/message.css';

const IsPrimeMessage = ({ isPrime }) => {
    return (
        <div className="message-wrapper">
            <p>Is the number prime?: </p>
            <p className={isPrime ? "is-prime" : "is-not-prime"}>{isPrime.toString().toUpperCase()}</p>
        </div>
    )
}

export default IsPrimeMessage;