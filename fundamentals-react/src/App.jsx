import './App.css'
import React from 'react'

import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Card from './components/layout/Card'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'
import Random from './components/basics/Random'

export default function App(props) {
    return (
        <div className="App">
            <h1>React Fundamentals</h1>
            <div className="Cards">
                <Card title="#04 - Components with Children" color="#00C8F8">
                    <Family surname="Silva">
                        <FamilyMember name="Pedro" />
                        <FamilyMember name="Ana" />
                        <FamilyMember name="Richy" />
                    </Family>
                </Card>
                <Card title="#04 - Random Challenge" color="#FA6900">
                    <Random min={1} max={60} />
                </Card>
                <Card title="#03 - Fragments" color="#E94C6F">
                    <Fragments />
                </Card>
                <Card title="#02 - With Paremeter" color="#E8B71A">
                    <WithParameter
                        title="student situation"
                        student="Paulo"
                        grade={8.7}
                    />
                </Card>
                <Card title="#01 - First Component" color="#588C73">
                    <First />
                </Card>
            </div>
        </div>
    )
}