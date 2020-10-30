import React from 'react'

export default function WithParameter(props) {
    const status = props.grade >= 7 ? 'Approved' : 'Failed'
    const grade = Math.ceil(props.grade)
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.student} </strong>has grade <strong> {grade}</strong> and is <strong>{status}</strong>!
            </p>
        </div>
    )
}