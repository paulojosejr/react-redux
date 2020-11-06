import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cb = props.whenClick
    return (
        <div>
            <div>Child</div>
            <button onClick={_ => cb('Paulo', 25, true)}>Info</button>
        </div>
    )
}