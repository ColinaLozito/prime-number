import React, { useState, useContext } from "react";
import IsPrimeMessage from "./IsPrimeMessage";
import Button from './Button';
import Toggle from './Toggle';
import Input from "./Input";
import Count from './Count';
import Table from './Table';
import Modal from './Modal';
import { isPrime } from "../utils";
import { toTableList } from '../utils';
import { AppContext } from '../context';
import "../styles/app.css";
import instructions from '../instructions.json'

const App = () => {
  const { numbersArr, setNumbersContext, resetState } = useContext(AppContext)

  const [showTable, setShowTable] = useState(false)
  const [number, setNumber] = useState();
  const [displayModal, setDisplayModal] = useState(false);

  const onSubmit = (num) => {
    setNumber(num);
    setNumbersContext(num);
  };

  const reset = () => {
    resetState();
    setNumber();
  }

  const closeModal = () => {
    setDisplayModal(false)
  }

  const showModal = () => {
    setDisplayModal(true)
  }

  return (

    <div className="app">
      <div className="header">
        <p>Check if your number is PRIME</p>

        <div className="header-button-container">
          {
            !!numbersArr.length &&
            <Button title="CLEAR" type="warn" onPressButton={reset} />
          }
        </div>
      </div>
      <div className={`input-container ${!!!numbersArr.length && "no-results"}`}>
        <p onClick={showModal} className="instructions">{">>instructions"}</p>
        <Input submit={onSubmit} />
        {number !== undefined && <IsPrimeMessage isPrime={isPrime(number)} />}
        {
          !!numbersArr.length && (
            <>
              <Count count={numbersArr.length} />
              <Toggle isToggle={showTable} onToggle={setShowTable} />
              {
                showTable && (
                  <Table list={toTableList(numbersArr)} />
                )
              }
            </>
          )
        }

      </div>
      {
        displayModal &&
        <Modal
          title={instructions.title}
          description={instructions.description}
          points={instructions.points}
          onClose={closeModal}
        />
      }
    </div>
  );
}

export default App;
