import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext(null);

export const Parent = () => {
    const [ username, setUserName ] = useState("Ciprian");

    return (
        <AppContext.Provider value={{ username, setUserName }}>
            <div>
                {username}
                <Child />
            </div>
        </AppContext.Provider>
    )
}

export const Child = () => {
    return <GrandChild />
}

export const GrandChild = () => {
    const { setUserName } = useContext(AppContext)
    return (
        <div>
            <button onClick={() => {
                setUserName("CiprianTech")
            }}>
                Change username
            </button>
        </div>
    )
}