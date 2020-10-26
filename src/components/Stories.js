import React from 'react'

import { useEffect } from 'react';
import { REMOVE_PAGE_REQUEST, SET_STORIES_FAILURE, SET_STORIES_REQUEST, SET_STORIES_SUCCESS } from '../store/constants/storyConstent';
import { useStateValues } from '../store/context';
import Loading from './Loading';


export default function Stories() {
    const [state,dispatch] = useStateValues();

//   const {isLoading , hits , query , page } = state;

  

  useEffect(()=>{
      
    const fetchData=async()=>{
        try{
        dispatch({type:SET_STORIES_REQUEST});
      const data = await fetch(`http://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`);
      const storiesData = await data.json();
      const {hits, nbPages, page } = storiesData;
      dispatch({type:SET_STORIES_SUCCESS,payload:{hits,nbPages,page }})

        }catch(error){
            dispatch({type:SET_STORIES_FAILURE,payload:error})
        }
     
      

    }
    fetchData();


  },[state.page,state.nbPages,state.query])


  const removeStory=(ID)=>{
      dispatch({type:REMOVE_PAGE_REQUEST , payload:ID})

  }

    return (
        <>
        {state.isLoading ? <Loading/> :(
             <section className='stories'>
      { state.hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className='story'>
            <h4 className='title'>{title}</h4>

            <p className='info'>
              {points} points by
              <span> {author} | </span> {num_comments} comments
            </p>
            <div>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='read-link'
              >
                read more
              </a>
              <button
                className='remove-btn'
                onClick={() => removeStory(story.objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>

        ) }

        </>
   
    )
}
