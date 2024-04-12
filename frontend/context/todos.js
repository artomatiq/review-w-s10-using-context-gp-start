import React, {createContext} from 'react'

const dataToProvide = {
    favoriteBand: 'Beatles'
}

export const TodosContext = createContext()

export function TodosProvider({children}) {
    return (
        <TodosContext.Provider value={dataToProvide}>
            {children}
        </TodosContext.Provider>
    )
}