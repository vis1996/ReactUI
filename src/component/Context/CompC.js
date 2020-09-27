import React, { Component } from 'react'
import {UserConsumer} from './useContext'
export class CompC extends Component {
    render() {
        return (
            <UserConsumer>
               {
                 (data) =>{
                     return <div>Hello {data} </div>
                 }
               } 
            </UserConsumer>
        )
    }
}

export default CompC
