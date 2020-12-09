import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import uuid from 'react-uuid'
import QuestionContainer from './QuestionComponent'
import AnswerContainer from './AnswerComponent'

function Question(props){
    const [question, setQuestion] = useState({
        username:"",
        title:"",
        description:"",
        createdAt:""
    });

    const [answers, setAnswers] = useState([]);

    useEffect(() => {

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

     },[])




    
    return(
        <div className="col-8 mx-auto">
        <QuestionContainer created={question.createdAt} username={question.username} id={question._id} title={question.title} description={question.description} />
        
        {answers.length ?
            
            
            <div className="mx-auto" >
            <h6 className="text-center my-5" style={{fontFamily:"JetBrains Mono, monospace",fontSize:"1.5rem"}}>Answers</h6>
            {answers.map(answer => {
                return <AnswerContainer key={uuid()} created={answer.createdAt} username={answer.username} description={answer.description} />
            })}
            </div>
            :
            <h5 className="text-center shadow-lg p-3 mb-5 bg-white rounded" style={{fontFamily:"JetBrains Mono, monospace"}}>This questions has no answers yet</h5>
        
         }
       
    
        
        <Link className="btn btn-primary btn-lg btn-block mx-auto" style={{maxWidth:"500px"}} to={"/answer/"+props.match.params.question_id} >Answer</Link>
       
        
        
        </div>    
    )
}


export default Question;