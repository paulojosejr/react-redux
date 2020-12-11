/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    return (
        <Card title="Number Average" Green>
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}