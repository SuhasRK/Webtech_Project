import React,{useState} from 'react'
import axios from 'axios'

function Answer(props){

    const [question, setQuestion] = useState({
        title:"",
        description:""
    });

    axios.get("http://localhost/"+props.match.params.id)
    .then(result => {
        setQuestion({
        title:result.data.title,
        description:result.data.description
        })
    })

   const [answer,setAnswer] =  useState({
       description:"",
       question_id:props.match.params.id
   });

   function handleChange(event){
       let value = event.target.value;
       setAnswer(prevValue => {
           return {
               ...prevValue,
               description:value
           }

       })
   }

   function submitAnswer(event){
    event.preventDefault();
    axios.post("http://localhost/answer/"+props.match.params.id , answer)
    .then(result =>console.log(result.data))
    .catch(err => console.log(err))
    window.location.href='/';
   }






   return(
       <div>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={submitAnswer}>
            <textarea onChange={handleChange} type="text" placeholder="Answer" value={answer.description}/>
            <input type="submit"/>
        </form>
     </div>
   )}



export default Answer;