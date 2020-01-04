import React from 'react'
import { Link } from "react-router-dom"
import "./header.scss"

export default function Header() {
    return (
        <header className="header">
            <h1>HEADER</h1>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT ME</Link></li>
            </ul>
        </header>
    )
}
