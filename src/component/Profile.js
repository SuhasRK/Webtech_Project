import React, { useState , useEffect} from 'react'
import axios from 'axios'
import QuestionContainer from './QuestionComponent'
import uuid from 'react-uuid';

function Profile() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/user/"+localStorage.getItem("user_id"))
        .then(name => {
            axios.get("http://localhost/asked/"+name.data)
            .then(result => setQuestions(result.data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
     },[])

     return(
         <div>
             {questions.map(question => {
                 return <QuestionContainer key={uuid()} created={question.createdAt} username={question.username} id={question._id} title={question.title} description={question.description} /> 
             })}
         </div>
     )
    
        
   

}

export default Profile;