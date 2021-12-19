import React, { useState } from 'react';

const Context = React.createContext();

export const CartContextProvider = ({children}) => {

    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setSeverity(severity);
        setMessage(message);
    }

    return(
        <Context.Provider value={{
            notification: {
                message,
                severity
            },
            setNotification
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;