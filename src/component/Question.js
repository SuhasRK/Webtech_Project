import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import uuid from 'react-uuid'
import QuestionContainer from './QuestionComponent'

function Question(props){
    const [question, setQuestion] = useState({
        username:"",
        title:"",
        description:"",
        createdAt:""
    });

    const [answers, setAnswers] = useState([]);

    axios.get("http://localhost/"+props.match.params.question_id)
    .then(result => {
        setQuestion({
        username:result.data.username,
        title:result.data.title,
        description:result.data.description,
        createdAt:result.data.createdAt
        })

        axios.get("http://localhost/answer/"+props.match.params.question_id)
        .then(result => setAnswers(result.data))
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))


    
    return(
        <div>
        <QuestionContainer created={question.createdAt} username={question.username} id={question._id} title={question.title} description={question.description} />
        
        <ul>
            {answers.map(answer => {
                return <li key={uuid()}>{answer.description}</li>
            })}
        </ul>
    
        <Link to={"/answer/"+props.match.params.question_id} >Answer</Link>
        
        
        </div>    
    )
}


export default Question;