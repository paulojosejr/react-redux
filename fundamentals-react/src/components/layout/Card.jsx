import './Card.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}