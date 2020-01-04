import React from 'react'
import Buttons from '../Buttons'
import "./body.scss"

export default function Body() {
    return (
        <div className="body-container">
            <Buttons left/>
            <h1>VS</h1>
            <Buttons right/>
        </div>
    )
}
