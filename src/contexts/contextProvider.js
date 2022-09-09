import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    menu: false,
    sideBar: false,
}

export const ContextProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (event) => {
        setIsClicked({...initialState, [event]: true})
    }
    const [screenSize, setScreenSize] = useState(undefined);

    return <StateContext.Provider value={{
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setIsClicked
    }}>
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);