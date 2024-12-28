import { createContext, useState } from "react"

export const CounterContext = createContext()

function GlobalCounter({children}){
    const [count, setCount] = useState(0)
    return <CounterContext.Provider value={{
        count:count,
        setCount: setCount
    }}>
        {children}
    </CounterContext.Provider>
}

export default GlobalCounter
