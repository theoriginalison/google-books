import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1>Google Book Search</h1>
            <Link className="navbar-brand ml-auto" to="/">
                Search
        </Link>
            <Link className="navbar-brand" to="/save">
                Save
        </Link>
        </nav>
    )
}

export default Nav;
