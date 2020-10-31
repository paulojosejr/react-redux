import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'
import Random from './components/basics/Random'

export default function App(props) {
    return (
        <div id="app">
            <h1>React Fundamentals (Arrow)</h1>
            <Random min={1} max={60} />
            <Fragments />
            <WithParameter
                title="student situation"
                student="Paulo"
                grade={8.7}
            />
            <First />
        </div>
    )
}