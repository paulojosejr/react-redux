import './App.css'
import React from 'react'

import Counter from './components/counter/Counter'
import Input from './components/form/Input'
import IndirectFather from './components/communication/IndirectFather'
import DirectFather from "./components/communication/DirectFather"
import InfoUser from './components/conditional/InfoUser'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductsTable from './components/repeat/ProductsTable'
import StudentsList from './components/repeat/StudentsList'
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
                <Card title="#12 - Counter" color="#FF0d01">
                    <Counter startNumber= {10}/>
                </Card>
                <Card title="#11 - Controlled Component (input)" color="#FFDDC9">
                    <Input />
                </Card>
                <Card title="#10 - Indirect Communication" color="#FF8810">
                    <IndirectFather />
                </Card>
                <Card title="#09 - Direct Communication" color="#1F0110">
                    <DirectFather />
                </Card>
                <Card title="#08 - Conditional Rendering" color="#119990">
                    <InfoUser user={{ name: 'Paulo'}}/>
                    <EvenOrOdd number={21}/>
                </Card>
                <Card title="#07 - Repeat Challenge" color="#055555">
                    <ProductsTable></ProductsTable>
                </Card>
                <Card title="#06 - Repeat" color="#0FF55C">
                    <StudentsList></StudentsList>
                </Card>
                <Card title="#05 - Components with Children" color="#00C8F8">
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