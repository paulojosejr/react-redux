/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import products from '../data/products'

function getProductsListItem() {
    return products.map(prod => {
        return <li key={prod.id}>{prod.id} - {prod.name} - €{prod.price}</li>
    })
}

export default props => {
    return (
        <div>
            <h2>Repeat</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}