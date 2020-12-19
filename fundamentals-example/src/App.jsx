/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import First from './Components/First'
import WithParameter from './Components/WithParameter'
import './Components/WithChild'
import WithChild from './Components/WithChild'
import Card from './Components/layout/Card'
import Repeat from './Components/Repeat'
import Conditional from './Components/Conditional'
import ConditionalWithIf from './Components/ConditionalWithIf'

export default (props) =>
    <div className="App">
        <Card title="#06 - Component With Conditional 2.0">
            <ConditionalWithIf number={10}/>
        </Card>
        <Card title="#05 - Component With Conditional 1.0">
            <Conditional number={11}/>
        </Card>
        <Card title="#04 - Component With Repeat">
            <Repeat/>
        </Card>
        <Card title="#03 - Component With Child">
            <WithChild>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </WithChild>
        </Card>
        <Card title="#02 - Component With Parameter">
            <WithParameter title="This is a Title" subtitle="This is a Subtitle" />
        </Card>
        <Card title="#01 - First Component">
            <First />
        </Card>
    </div>
