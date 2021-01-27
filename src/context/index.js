import React, { useState } from 'react';
import { setLocalStorage, resetLocalStorage, getLocalStorage } from '../utils';

const initState = {
    numbersArr: []
};

export const AppContext = React.createContext(initState);

export const useAppContext = () => {
    const [numbersArr, setNumbersArr] = useState(getLocalStorage() || []);

    const setNumbersContext = (num) => {
        const arr = [...numbersArr, num];
        setNumbersArr(arr);
        setLocalStorage(arr);
    }

    const resetState = () => {
        setNumbersArr([]);
        resetLocalStorage();
    }

    return {
        numbersArr,
        setNumbersContext,
        resetState,
    };
};