import React from 'react';
import axios from 'axios';
import './CSS/empform.scss'
 class UpdateEmployee extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             empId :0,
             firstname: "",
             lastname: "",
             department: "",
             date: "",
             salary: "",
             city: "",
         }
         this.changeHandler = this.changeHandler.bind();
         this.updateEmployee = this.updateEmployee.bind();
    }

    updateEmployee = (event)=>{
        event.preventDefault();
        const employee = {
            empId :this.state.empId,
            firtname :this.state.firstname,
            lastname : this.state.lastname,
            dob : this.state.date,
            department : this.state.department,
            salary : this.state.salary,
            city : this.state.city
        }
        axios.put('http://localhost:55424/api/Employee/'+this.props.match.params.empId,employee)
        .then(res => alert("data updated successfully"))
        .catch(error => alert("data updation failed"+error));

    }
    
  changeHandler = (event) => {
      event.preventDefault();
    this.setState({[event.target.name]:event.target.value});
    }

    componentDidMount(){
        axios.get('http://localhost:55424/api/Employee/'+this.props.match.params.empId)
        .then(response => {
            console.log(response);
            this.setState({
                empId : response.data.empId,
                firstname : response.data.firstname,
                lastname : response.data.lastname,
                date :response.data.dob,
                department : response.data.department,
                salary : response.data.salary,
                city : response.data.city
            });
        })
        .catch(error =>{
            console.log(error);
        })
    }
    render() {
        const { empId, firstname, lastname, department, date, salary, city } = this.state;
        return (
          <div  className='form'>
            <form onSubmit={this.updateEmployee}>
                <table>
                    <tbody> 
                    <tr>
                        <th>Employee Id</th>
                        <td><label>{empId}</label></td>
                    </tr>
                    <tr>
                        <th>firstname</th>
                        <td>
                            <input type="text"
                                name="firstname"
                                value={firstname}
                                placeholder ="firstname"
                                onChange={this.changeHandler} />
                        </td>
                    </tr>
                    <tr>
                        <th>lastname</th>
                        <td>
                            <input type="text" 
                            name="lastname"
                            value={lastname} 
                            placeholder="lastname"  
                            onChange={this.changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>department</th>
                        <td>
                            <input type="text" 
                            name="department" 
                            value={department}  
                            placeholder="department"
                            onChange={this.changeHandler} />
                        </td>
                    </tr>
                    <tr>
                        <th>Date of join</th>
                        <td>
                            <input type="text" 
                            name="date" 
                            value={date}   
                            placeholder="DD/MM/YYYY"
                            onChange={this.changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>salary</th>
                        <td>
                            <input type="text"
                            name="salary" 
                            value={salary}   
                            placeholder="salary"
                            onChange={this.changeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>city</th>
                        <td>
                            <input type="text" 
                            name="city" 
                            value={city} 
                            placeholder="city" 
                            onChange={this.changeHandler} />
                        </td>
                    </tr>
                    <tr>
                       <th><button type="submit">update Employee</button></th>
                    </tr>
                    </tbody>
                </table>
            </form>
          </div>
        );
      }
    
 }
 export default UpdateEmployee