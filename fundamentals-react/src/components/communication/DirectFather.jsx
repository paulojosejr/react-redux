import React from 'react'
import DirectChild from './DirectChild'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DirectChild name="Junior" age={20} athletic={true}/>
            <DirectChild name="Juliana" age={17} athletic={false}/>
        </div>
    )
}