/* eslint-disable import/no-anonymous-default-export */
import './Mega.css'
import React, { useState } from 'react'

export default props => {
    function generateNumberNotContained(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ? generateNumberNotContained(min, max, array) : random
    }


    function generateNumbers(amount) {
        const numbers = Array(amount)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateNumberNotContained(1, 60, nums)
                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numbers
    }

    const [amount, setAmount] = useState(props.amount || 6)
    const initialNumbers = generateNumbers(amount)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Numbers Amount</label>
                <input min="6" max="10" type="number" value={amount}
                    onChange={(e) => {
                        setAmount(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}
                        />
            </div>
            <button onClick={_ => setNumbers(generateNumbers(amount))}>Generate Numbers</button>
        </div>
    )
}