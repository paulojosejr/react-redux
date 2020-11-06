/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import If, { Else } from './If'

export default props => {
    const user = props.user || {}
    return (
        <div>
            <If test={user && user.name}>
                Welcome! <strong>{user.name}</strong>!

            <Else>
                Welcome! <strong> Big Friend</strong>!
            </Else>
            </If>
        </div>
    )
}