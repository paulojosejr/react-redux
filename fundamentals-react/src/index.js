import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'

ReactDom.render(
    <div id="app">
        <First/>
        <WithParameter 
        title="student situation" 
        student="Paulo" 
        grade={8.7}/>
    </div>,
    document.getElementById('root')
)