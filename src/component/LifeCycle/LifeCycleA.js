import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           name:'vishal'
      }
      console.log('lifecycleA constructor')
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('lifecycleA getDerivedStateFromProps')
    return null;
  }
   
   componentDidMount(){
       console.log('lifecycle A componetdidmount')
   }

   shouldComponentUpdate(){
       console.log('lifecycleA shouldcomponentupdate')
       return true
   }

   getSnapshotBeforeUpdate(){
    console.log('lifecycleA getSnapshotBeforeUpdate')
    return null;
   }

   componentDidUpdate(){
       console.log('lifecycleA componentdidupdate')
   }
   changeState(){
       this.setState({
           name:'change name'
       })
   }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>life cycle A</div>
                <button onClick={this.changeState.bind(this)}>change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
