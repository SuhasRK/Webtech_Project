function Logout(){
    localStorage.setItem("user_id",null)
    window.location.href = "/"
    return <h6>Logged Out</h6>
}

export default Logout;