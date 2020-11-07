import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cb = props.whenClick
    const generateAge = () => parseInt (Math.random() * (20)) + 50
    const generateAthletic = Math.random() > 0.5
    return (
        <div>
            <div>Child</div>
            <button onClick={_ => cb('Paulo', generateAge, generateAthletic)}>Info</button>
        </div>
    )
}