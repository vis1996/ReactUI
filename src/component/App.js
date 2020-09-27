import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import GetData from './GetData';
import AddEmployee from './AddEmployee'
import UpdateEmployee from './UpdateEmployee';
import './CSS/nav.scss'

class App extends React.Component {
    render(){
        return(   
            <div> 
                <Router>
                <div className='bgcolor'>
                    <ul>
                        <li className='color'><Link to={"/"}>Employee List</Link></li>
                    </ul>
                    <ul>
                        <li className='color'><Link to={"/add"}>Add Employee</Link></li>
                    </ul>
                </div>
                
                <Switch>
                    <Route  exact path="/" component={GetData}/>
                    <Route  path="/add" component={AddEmployee}/>
                    <Route path="/update/:empId" component={UpdateEmployee} /> 
                </Switch>
            </Router>
            </div>   
        )
    }
}
 export default App;