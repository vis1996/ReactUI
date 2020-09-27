import React from "react";
import axios from "axios";
import './CSS/empform.scss'

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      department: null,
      date: null,
      salary: null,
      city: null,
    }
    this.changeHandler = this.changeHandler.bind();
    this.submitHandler = this.submitHandler.bind();
  }

  changeHandler = (event) => {
      this.setState({[event.target.name]:event.target.value});
  }

  submitHandler = (event) => {
      event.preventDefault();
     // console.log(this.state);
     if(this.state.firstname!=null&&this.state.lastname!=null&&this.state.department!=null
        &&this.state.date!=null&&this.state.salary!=null&&this.state.city!=null)
     {
        axios.post('http://localhost:55424/api/Employee',this.state)
        .then(response => {
            alert("this record added successfully")
            this.setState({firstname: "",
            lastname: "",
            department: "",
            date: "",
            salary: "",
            city: ""})
        }) 
        .catch(error => {
            console.log(error);
            alert("this record not added")
        });
     }
     else {
        // validation 
         if(this.state.firstname==null || /\s/.test(this.state.firstname)){
             alert("first name is empty")
         }
         else if(this.state.lastname==null || /\s/.test(this.state.lastname)){
             alert("last name is empty")
         }
         else if(this.state.department==null || /\s/.test(this.state.department)){
            alert("department is empty")
        }
        else if(this.state.date==null || /\s/.test(this.state.date)){
            alert("date is empty")
        }
        else if(this.state.salary==null || /\s/.test(this.state.salary)){
            alert("salary is empty")
        }
        else if(this.state.city==null || /\s/.test(this.state.firstname)){
            alert("city is empty")
        }
     }
     
  }

  render() {
    const { firstname, lastname, department, date, salary, city } = this.state;
    return (
      <div className='form'>
        <form onSubmit={this.submitHandler}>
            <table>
                <tbody>
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
                {/* <tr>
                    <th>topic</th>
                    <td>
                        <select value={topic} name="topic" onChange={this.changeHandler}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='view'>View</option>
                        </select>
                    </td>
                </tr> */}
                <tr>
                   <th><button type="submit">add Employee</button></th>
                </tr>
                </tbody>
            </table>
        </form>
      </div>
    );
  }
}
export default AddEmployee;
