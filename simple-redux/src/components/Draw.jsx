/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Number Draw" Purple>
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{random}</strong>
                </span>
            </div>
        </Card>
    )
}