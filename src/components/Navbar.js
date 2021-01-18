import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
            <Link  className="navbar-brand mb-0 h1" to="/">Store</Link>
        </div>
    </nav>
    )
}
