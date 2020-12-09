import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Vote from './Vote'

function AnswerComponent(props) {
    return (
       <div className="container my-5 p-3 shadow-lg p-3 mb-5 rounded" style={{backgroundColor: "#faebeb",borderRadius: "10px",fontFamily:"Quicksand"}}>
       <div className="row">
            <div className="col-1">
            <Vote />
            </div>
        
           <div className="col-11">
               <div className="mb-3">
                   <div className="d-flex justify-content-between">
                       <b>{props.username}</b><span className="ml-4">{props.created}</span>
                   </div>
           
               </div>
               
               <div>
               {props.description}
               </div>
           </div>
       </div>
   </div>
    )
 }

 export default AnswerComponent;