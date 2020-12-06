import React,{useState} from 'react'
import axios from 'axios' 
import jwt_decode from 'jwt-decode';

function Signup(){
    const [user,setUser] = useState({
        username:'',
        password:''
    })

    function handleChange(event){
        const {name, value} = event.target;
        setUser(prevValue => {
            return {
                ...prevValue,
                [name]:value

            }
        })
    }

    function postUser(event){
        
        event.preventDefault();
        axios.post('http://localhost/signup',user)
        .then(result =>{
            if(result.data.msg === "User already exists" || result.data.msg === "Enter all fields")
                alert(result.data.msg)
            else{
                var userId = jwt_decode(result.data.token).id;
                localStorage.setItem("user_id",userId);
                console.log(result.data.msg)
                window.location.href='/';
            }
           
        })
        .catch((err) => console.log("Error :"+err))
        

    }

    return (
        <div className="bg1">
            <form class="box" onSubmit={postUser}>
    <h1>Signup</h1>
    <input type="text" onChange={handleChange} name="username" placeholder="Username" value={user.username} />
    <input type="password" onChange={handleChange} name="password" placeholder="Password" value={user.password} />
    <input type="submit" name="" value="Sign Up" />
        </form>
        </div>
    )
}

export default Signup;