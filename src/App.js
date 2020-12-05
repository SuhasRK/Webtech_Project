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
import {Link} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
    return(
        <div>
        
        <Router>
            <Navbar />
            <Route path='/' exact component={QuestionList} />
            <Route path='/about'  component={About} />
            <Route path='/add'  component={QuestionPost} />
            <Route path='/:question_id'  component={Question} />
            <Route path='/answer/:id'  component={Answer} />
            <Route path='/signup'  component={Signup} />
            <Route path='/login'  component={Login} />
        </Router>
        </div>
    )
}

export default App;