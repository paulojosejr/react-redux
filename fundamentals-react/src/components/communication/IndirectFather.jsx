import React, { useState} from 'react'
import IndirectChild from './IndirectChild'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [athletic, setAthletic] = useState(false)

    function info(name, age, athletic){
        setName(name)
        setAge(age)
        setAthletic(athletic)
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