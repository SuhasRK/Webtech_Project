import React,{useState} from 'react'
import axios from 'axios' 

function Login(){
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
        axios.post('http://localhost/login',user)
        .then(result =>{
            if(result.data.msg === "User Doesn't Exist" || result.data.msg === "Enter all fields" || result.data.msg === "Password doesn't match with the username")
                alert(result.data.msg)
            else{
                console.log(result.data)
                // window.location.href = "/";   
            }
           
        })
        .catch((err) => console.log("Error :"+err))
        // window.location.href='/';

    }

    return (
        <div>
            <form class="box" onSubmit={postUser}>
    <h1>Login</h1>
    <input type="text" onChange={handleChange} name="username" placeholder="Username" value={user.username} />
    <input type="password" onChange={handleChange} name="password" placeholder="Password" value={user.password} />
    <input type="submit" name="" value="Login" />
        </form>
        </div>
    )
}

export default Login;