import React, { useState } from 'react'
import axios from 'axios'
import QuestionContainer from './QuestionComponent'

function Answer(props) {

    const [question, setQuestion] = useState({
        username: "",
        title: "",
        description: "",
        createdAt: ""
    });

    axios.get("http://localhost/" + props.match.params.id)
        .then(result => {
            setQuestion({
                username: result.data.username,
                title: result.data.title,
                description: result.data.description,
                createdAt: result.data.createdAt
            })
        })

    const [answer, setAnswer] = useState({
        username: "",
        description: "",
        question_id: props.match.params.id
    });

    axios.get("http://localhost/user/" + localStorage.getItem("user_id"))
        .then(result => {
            setAnswer(prevValue => {

                return {
                    ...prevValue,
                    username: result.data,
                }

            })
        })
        .catch(err => console.log(err))

    function handleChange(event) {
        let value = event.target.value;
        setAnswer(prevValue => {
            return {
                ...prevValue,
                description: value
            }

        })
    }

    function submitAnswer(event) {
        event.preventDefault();
        axios.post("http://localhost/answer/" + props.match.params.id, answer)
            .then(result => {
                if(result.data.msg === "Description needed")
                    alert(result.data.msg)
                else
                    window.location.href = '/';
            })
            .catch(err => console.log(err))
        
    }






    return (
        <div >
            <QuestionContainer created={question.createdAt} username={question.username} id={question._id} title={question.title} description={question.description} />
            <div className="container my-5 p-3" style={{ backgroundColor: "#ccccde", borderRadius: "10px",border:"2px solid blue" }}>
                <form onSubmit={submitAnswer}>
                    <div className="form-group">
                        
                        <textarea onChange={handleChange} type="text" placeholder="Type your Answer here...." value={answer.description} className="form-control" rows="10"></textarea>
                    </div>
                    <input className="btn btn-primary btn-lg btn-block" type="submit" />
                </form>
            </div>
        </div>
    )
}



export default Answer;


