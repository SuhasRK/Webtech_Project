import React, { useState } from 'react'
import { Link } from "react-router-dom";

function QuestionContainer(props) {
    return (
       <div className="container my-5 p-3 shadow-lg p-3 mb-5 rounded" style={{backgroundColor: "#e6f2ff",borderRadius: "10px", fontFamily:"Quicksand"}} >
       <div className="row">
          
           <div className="col">
               <div className="mb-3">
                   <div  className="d-flex justify-content-between">
                       <b>{props.username}</b><span>{props.created.split('T')[0]} , {props.created.split('T')[1]}</span>
                   </div>
           
               </div>
               <div><b><Link to={'/question/' + props.id} style={{color:"black"}}><h3>{props.title}</h3></Link></b></div>
               <div>{props.description}
               </div>
           </div>
       </div>
   </div>
    )
 }

 export default QuestionContainer;