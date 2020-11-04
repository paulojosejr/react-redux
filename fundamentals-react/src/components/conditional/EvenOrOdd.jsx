import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const isEven = props.number % 2 === 0
    return (
        <div>
            { isEven ? <span>Even</span> : <span>Odd</span>}


        </div>
    )
}