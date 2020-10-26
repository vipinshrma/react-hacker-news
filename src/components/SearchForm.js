import React, { useState } from 'react'
import { SEARCH_REQUEST, SEARCH_SUCCESS } from '../store/constants/storyConstent';
import { useStateValues } from '../store/context'

export default function SearchForm() {
    const [state,dispatch] = useStateValues();
    const [ query, setQuery] = useState('')

    const onChange=(e)=>{
        dispatch({type:SEARCH_REQUEST})
        setQuery(e.target.value);
        dispatch({type:SEARCH_SUCCESS , payload:query.trim()})

    }

    return (
        <React.Fragment>
         <form className='search-form' onSubmit={(e) => e.preventDefault()}>
         <h2>search hacker news</h2>
        <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => onChange(e)}
        />
         </form>
        </React.Fragment>
    )
}
