/* eslint-disable import/no-anonymous-default-export */
import './Input.css'
import React, {useState} from 'react'

export default props => {

    const [value, setValue] = useState('Starter')

    function whenChange(e){
        setValue(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection:'column'
            }}>
            <input value ={value} onChange={whenChange} />
            <input value ={value} readOnly />
            <input value ={undefined} />
            </div>
        </div>
    )
}