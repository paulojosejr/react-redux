import React from 'react'
import students from '../../data/students'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const liStudents = students.map(student => {
        return <li key={student.id}>
            {student.id}) {student.name} ( {student.grade} )
            </li>
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {liStudents}
            </ul>
        </div>
    )
}