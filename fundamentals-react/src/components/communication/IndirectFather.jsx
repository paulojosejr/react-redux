import React from 'react'
import IndirectChild from './IndirectChild'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let name = '?'
    let age = 0
    let athletic = false

    function info(nameParam, ageParam, athleticParam){
        name = nameParam
        age = ageParam
        athletic = athleticParam
    }

    return (
        <div>
            <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{athletic ? 'True' : 'False'}</span>
            </div>
            <IndirectChild whenClick={info}/>
            </div>
        </div>
    )
}