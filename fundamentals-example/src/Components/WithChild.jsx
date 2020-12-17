/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
    <div>
        <h2>Childs:</h2>
        <div>
            {props.children}
        </div>
    </div>