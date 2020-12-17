/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import First from './Components/First'
import WithParameter from './Components/WithParameter'
import './Components/WithChild'
import WithChild from './Components/WithChild'
import Card from './Components/layout/Card'

export default (props) =>
    <div className="App">
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
