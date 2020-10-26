import React from 'react'
import { HANDLE_PAGE_REQUEST } from '../store/constants/storyConstent';
import { useStateValues } from '../store/context'

export default function Buttons() {
    
 const [state , dispatch] = useStateValues();
 const {page,isLoading} = state;

 const handleChange=(inc)=>{
     dispatch({type:HANDLE_PAGE_REQUEST,payload:inc})
 }

 const decChange=(dec)=>{
     dispatch({type:HANDLE_PAGE_REQUEST,payload:dec})
 }
  return (
    <div className='btn-container'>
      <button disabled={isLoading}  onClick={()=>decChange('dec')}> 
        prev
      </button>
      <p>
        {page} 
        
      </p>
      <button disabled={isLoading}  onClick={()=>handleChange('inc')}>
        next
      </button>
    </div>
  )
    
}
