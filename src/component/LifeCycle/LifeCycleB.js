import React, { Component } from 'react'

export class LifeCycleB extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           name:'vishal'
      }
      console.log('lifecycleB constructor')
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('lifecycleB getDerivedStateFromProps')
    return null;
  }
   
   componentDidMount(){
       console.log('lifecycleB componetdidmount')
   }
   shouldComponentUpdate(){
    console.log('lifecycleB shouldcomponentupdate')
    return true
}

getSnapshotBeforeUpdate(){
 console.log('lifecycleB getSnapshotBeforeUpdate')
 return null
}

componentDidUpdate(){
    console.log('lifecycleB componentdidupdate')
}
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                life cycle B
            </div>
        )
    }
}

export default LifeCycleB
