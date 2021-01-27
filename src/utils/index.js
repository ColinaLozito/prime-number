import {
    resetLocalStorage,
    setLocalStorage,
    localStorageExist,
    getLocalStorage,
} from './localStorage'

const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const timesNumbersUsed = (numbersArr) => {
    const listSorted = numbersArr.sort((a, b) => b - a);
    const counts = {};
    listSorted.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts
}

const toTableList = (numbersArr) => {
    return Object.entries(timesNumbersUsed(numbersArr)).map((x) => {
        return ({
            number: x[0],
            times: x[1],
            isPrime: isPrime(parseInt(x[0], 10))
        })
    })
}

export {
    isPrime,
    localStorageExist,
    resetLocalStorage,
    setLocalStorage,
    getLocalStorage,
    timesNumbersUsed,
    toTableList
}