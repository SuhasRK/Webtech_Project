import React,{useState} from 'react'
import axios from 'axios' 

function QuestionPost(){

    const [question , setQuestion] = useState({
        username:"",
        title: '',
        description:''
    })

    axios.get("http://localhost/user/"+localStorage.getItem("user_id"))
    .then(result =>{setQuestion(prevValue => {
        
        return {
            ...prevValue,
            username:result.data
        }
        
         })
        })
    .catch(err => console.log(err))

    function postQuestion(event){
        event.preventDefault();
        axios.post("http://localhost/add",question)
        .then(result =>console.log(result.data))
        .catch(err => console.log(err))
        
        window.location.href = "/";
        
    }



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
      <div className="col-8 mx-auto ">
      <h1 class="my-5" style={{color: "#111", fontFamily: 'Montserrat',fontSize: "75px", fontWeight: "bold", letterSpacing: "-1px", lineHeight: "1", textAlign: "center"}}>Post your Question here</h1>
        <form onSubmit={postQuestion}>
            <div className="form-group">
            <input type="text" onChange={handleChange} className="form-control mb-3 " name="title" placeholder="Title" value={question.title}/>
            <textarea type="text" onChange={handleChange} className="form-control mb-3 " name="description" placeholder="Description" value={question.description}rows="10"/>
            </div>
            <div style={{display:"flex"}} className="justify-content-center" ><input className="btn btn-primary btn-lg btn-block" type="submit" value="Post" /></div>
        </form>
      </div>
   )
}

export default QuestionPost;


