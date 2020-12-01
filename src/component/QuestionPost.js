import React,{useState} from 'react'
import axios from 'axios'

function QuestionPost(){


    const [question , setQuestion] = useState({
        title: '',
        description:''
    })

    function postQuestion(event){
        event.preventDefault();
        axios.post("http://localhost/add",question)
        .then(result =>console.log(result.data))
        .catch(err => console.log(err))

        window.location.href = "/";
    }

    // function handleChange(event){
    //     let name = event.target.name;
    //     let value = event.target.value;
        
    //     if(name==="title"){

    //         setQuestion(prevValue => {
    //             return {
    //             title:value,
    //             description:prevValue.description
    //         }
    //         })
    //     }
    //     else
    //     {

    //         setQuestion(prevValue => {
    //             return {
    //             title:prevValue.title,
    //             description:value
    //         }
    //         })
    //     }

        
    // }

    function handleChange(event){
        let {name,value} = event.target;
        
        setQuestion(prevValue => {
            return {
                ...prevValue,
                [name]:value
            }
        })

        
    }

   




   return(
      <div>
      <h1>Post your Question here</h1>
        <form onSubmit={postQuestion}>
            <input type="text" onChange={handleChange} name="title" placeholder="Title" value={question.title}/>
            <input type="text" onChange={handleChange} name="description" placeholder="Description" value={question.description}/>
            <input type="submit" />
        </form>
      </div>
   )
}

export default QuestionPost;


