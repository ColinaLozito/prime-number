import React from 'react';
import '../styles/count.css';

const Count = ({ count }) => (
    <div className="count-wrapper">
        <p>{`total numbers entered: ${count}`}</p>
    </div>
)

export default Count;