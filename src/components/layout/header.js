import React from 'react'
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <header style={headerStyle}>
            <h1> Noter </h1>
            <Link style={linkStyle} to="/">Home</Link>  |  <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    position: 'center',
    textAlign: 'center',
    fontSize: '28px',
    color: '#87ceeb', 
    textShadow: '0 0 6px #ffffff'
}

const linkStyle = {
    colot: '#fff',
    textDecoration: 'none'
}
