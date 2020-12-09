import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import QuestionContainer from './QuestionComponent';

console.log(localStorage.getItem("user_id"))

function QuestionList() {

   const [questions, setQuestions] = useState([]);


   useEffect(() => {
      axios.get("http://localhost:80/")
         .then(result => setQuestions(result.data))
         .catch(err => console.log(err))
   }, [])




   return (
      <div className="col-8 mx-auto ">
         <ul className="mx-auto " >
            {questions.map(question => {
               return (
                  <li key={question._id} style={{ listStyle: "none" }} >
                     <QuestionContainer created={question.createdAt} username={question.username} id={question._id} title={question.title} description={question.description} />
                  </li>)
            })}
         </ul>
      </div>

   )
}




export default QuestionList;