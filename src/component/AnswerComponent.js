import React, { useState } from 'react'
import { Link } from "react-router-dom";

function AnswerComponent(props) {
    return (
       <div className="container my-5 p-3" style={{backgroundColor: "#fff",borderRadius: "10px"}}>
       <div className="row">
           {/* <div className="col-2">
               <img src="./images/profile.jpg" alt="" height="60px" width="60px"
                   style="border-radius: 50%;display: block;margin: auto;" />
           </div> */}
           <div className="col">
               <div className="mb-3">
                   <div>
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