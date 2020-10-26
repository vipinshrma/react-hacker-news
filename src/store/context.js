import React , {useContext , useReducer , createContext} from 'react';


export const NewsContext = createContext();

export const NewsProvider=({reducer,initialState,children})=>{
    return <NewsContext.Provider value={useReducer(reducer,initialState)}>
        {children}

    </NewsContext.Provider>

}

export const useStateValues = ()=>useContext(NewsContext);
