import React,{useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

function QuestionList(){

   const [questions,setQuestions] =  useState([]);

   axios.get("http://localhost:80/")
   .then(result =>setQuestions(result.data))
   .catch(err => console.log(err))


   return(
      <div><h1> This is questions List</h1>
      <ul>
      {questions.map(question => {
         return (<li  key={question._id}>
               <Link to={'/'+question._id}><h3>{question.title}</h3></Link>
               <p>{question.description}</p>
               </li>)
      })}
      </ul>
      </div>

   )}

export default QuestionList;