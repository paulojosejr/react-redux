import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import First from './components/basics/First'

ReactDom.render(
    <div>
        <First/>
    </div>,
    document.getElementById('root')
)