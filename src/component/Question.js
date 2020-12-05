import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Question(props){
    const [question, setQuestion] = useState({
        title:"",
        description:""
    });

    const [answers, setAnswers] = useState([]);

    axios.get("http://localhost/"+props.match.params.question_id)
    .then(result => {
        setQuestion({
        title:result.data.title,
        description:result.data.description
        })

        axios.get("http://localhost/answer/"+props.match.params.question_id)
        .then(result => setAnswers(result.data))
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))


    
    return(
        <div>
        <h1>{question.title}</h1>
        <h2>{question.description}</h2>
        
        <ul>
            {answers.map(answer => {
                return <li>{answer.description}</li>
            })}
        </ul>
        {/* <Link to={"/answer/"+props.match.params.question_id} >Answer</Link> */}
        <Link to={"/answer/"+props.match.params.question_id} >Answer</Link>
        
        </div>    
    )
}


export default Question;