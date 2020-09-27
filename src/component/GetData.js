import React from 'react';
import axios from 'axios';
import UpdateEmployee from './UpdateEmployee';
import {Link} from 'react-router-dom';
//import {Redirect} from 'react-dom';
import './CSS/table.scss'
class GetData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            empId : 0,
            emplist : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:55424/api/Employee')
        .then(response => {
           // console.log(response);
            this.setState({emplist :response.data});
        })
        .catch(error =>{
            console.log(error);
        })
    }

    deleteEmployee = (empId) => {
        //this.setState({empId : emp});
        event.preventDefault();
        axios.delete('http://localhost:55424/api/Employee/'+empId)
        .then((response) => alert("data deleted successfully "+response.data));
    }

    render(){
        const { emplist } = this.state;
        return(
            <div className='fulldata'>
                     <table>
                     <thead className='header title'>
                         <tr>
                             <th className='blockcontent'>Employee ID</th>
                             <th className='blockcontent'>firstname</th>
                             <th className='blockcontent'>lastname</th>
                             <th className='blockcontent'>department</th>
                             <th className='blockcontent'>date of join</th>
                             <th className='blockcontent'>salary</th>
                             <th className='blockcontent'>city</th>
                             <th className='blockcontent'>update</th>
                             <th className='blockcontent'>delete</th>
                         </tr>
                     </thead>
                 {    
                    emplist.map(emp =>
                            <tbody className='content'>
                                <tr key={emp.empId}>
                                    <td className='tabledata'>{emp.empId}</td>
                                    <td className='tabledata'>{emp.firstname}</td>
                                    <td className='tabledata'>{emp.lastname}</td>
                                    <td className='tabledata'>{emp.department}</td>
                                    <td className='tabledata'>{emp.dob}</td>
                                    <td className='tabledata'>{emp.salary}</td>
                                    <td className='tabledata'>{emp.city}</td>
                                    <td className='tabledata'><Link className='hlupdate' to={"/update/"+emp.empId}>update</Link></td>
                                    <td className='tabledata'><button className='btn' onClick={() =>this.deleteEmployee(emp.empId)}>delete</button></td>


                                </tr>
                            </tbody>
                         )
                 }
                    </table>
            </div>
        );
    }
}
export default GetData;