import React, { Component } from 'react'
//import './demoone.scss'
export class Demoone extends Component {
    render() {
        return (
            <div className='one'>
                one block
                <div className='two'>two block
                    <div className='three'>three block</div>
                </div>
            </div>
        )
    }
}

export default Demoone
