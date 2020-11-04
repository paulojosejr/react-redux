import React from 'react'
import products from '../../data/products.js'
import './ProductsTable.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const tableProducts = products.map((product, i )=> {
        return (
            <tr key={product.id} className={i % 2 === 0 ? 'even' : ''}>
                <td>
                    {product.id}
                </td>
                <td>
                    {product.name}
                </td>
                <td>
                    €{product.price.toFixed(2).replace('.', ',')}
                </td>
            </tr>
        )
    })

    return (
        <div className="tableproducts">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {tableProducts}
            </tbody>
        </table>
        </div>
    )
}