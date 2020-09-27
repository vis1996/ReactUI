import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../App'
function CompC() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
           {user}-{channel}
        </div>
    )
}

export default CompC
