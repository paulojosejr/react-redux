/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    function generateNumber(amount) {


        const array = Array(amount)

        for (let i = 0; i < array.length; i++) {
            const randomNumber = parseInt(Math.random() * (59)) + 1
            if (randomNumber !== array) {
                array.push(randomNumber)
            }
        }
    }
    generateNumber(7)

    return (
        <div>
            Mega
        </div>
    )
}