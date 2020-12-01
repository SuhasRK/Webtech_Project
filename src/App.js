import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import QuestionList from './component/QuestionList';
import About from './component/About';
import Navbar from './component/Navbar';
import QuestionPost from './component/QuestionPost'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
    return(
        <div>
        
        <Router>
            <Navbar />
            <Route path='/' exact component={QuestionList} />
            <Route path='/about' component={About} />
            <Route path='/add' component={QuestionPost} />
        </Router>
        </div>
    )
}

export default App;