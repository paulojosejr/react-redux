import React from 'react'

export default function Random(props) {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Random Number</h2>
            <p><strong>Minimum Value</strong> {min}</p>
            <p><strong>Miximum Value</strong> {max}</p>
            <p><strong>Chosen Value</strong> {random}</p>
        </div>
    )
}