import React from 'react';
import '../styles/table.css';

const Table = ({ list }) => (
    <div className="table-wrapper">
        <div className="table-row">
            <div className="table-column first">NUMBER</div>
            <div className="table-column middle">TIMES USED</div>
            <div className="table-column last">IS PRIME</div>
        </div>
        {
            list.map(({ number, times, isPrime }) => (
                <div className="table-row" key={number}>
                    <div className="table-column first">{number}</div>
                    <div className="table-column middle">{times}</div>
                    <div className={`table-column last ${isPrime ? "is-prime" : "is-not-prime"}`}>{isPrime.toString()}</div>
                </div>
            ))
        }

    </div>
)

export default Table;