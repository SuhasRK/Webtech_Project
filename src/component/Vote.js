import React,{useState} from 'react'

function Vote(){

    const [count,setState]=useState(0)

    function upvote(){
        setState(prevValue=> prevValue+1)
    }

    function downvote(){
        setState(prevValue=> prevValue-1)
    }
    return(
        <div>
        <button onClick={upvote}>+</button>
        <h1>{count}</h1>
        <button onClick={downvote}>-</button>
        </div>
    )
    
}   

export default Vote;