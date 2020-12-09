import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import QuestionList from './component/QuestionList';
import Question from './component/Question';
import About from './component/About';
import Navbar from './component/Navbar';
import QuestionPost from './component/QuestionPost'
import Answer from './component/Answer'
import Signup from './component/Signup'
import Login from './component/Login'
import Logout from './component/Logout'
import Vote from './component/Vote'
import Profile from './component/Profile'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
require('popper.js');

function App(){
    return(
        <div>
        
        <Router>
            <Navbar />
            <Route exact path='/' component={QuestionList} />
            <Route exact path='/about'  component={About} />
            <Route exact path='/add'  component={QuestionPost} />
            <Route exact path='/question/:question_id'  component={Question} />
            <Route exact path='/answer/:id'  component={Answer} />
            <Route exact path='/signup'  component={Signup} />
            <Route path='/login'  component={Login} />
            <Route path='/logout'  component={Logout} />
            <Route path='/vote'  component={Vote} />
            <Route path='/profile'  component={Profile} />

        </Router>
        </div>
    )
}

export default App;