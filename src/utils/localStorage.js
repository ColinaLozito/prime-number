export const setLocalStorage = (context) => {
    localStorage.setItem("context", JSON.stringify(context));
}

export const getLocalStorage = (name = "context") => {
    const retrievedObject = localStorage.getItem(name);
    return JSON.parse(retrievedObject);
}

export const resetLocalStorage = () => {
    localStorage.clear();
}

export const localStorageExist = (name = "context") => localStorage.hasOwnProperty(name);

