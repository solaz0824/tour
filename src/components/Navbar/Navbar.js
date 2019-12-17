import React from 'react';
import './Navbar.scss';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to={{ pathname: "/" }} className="homeClick">

                <h1>
                    <span>
                        <i className="fab fa-keycdn" />
                    </span>
                    Key Tour
                    </h1>
            </Link>
            <ul className="nav-links">
                <li>
                    <NavLink to={{ pathname: "/" }} className="nav-link" >
                        Home
            </NavLink>
                </li>
                <li>
                    <NavLink to={{ pathname: "/about" }} activeClassName="is-active" className="nav-link" activeStyle={{
                        fontWeight: "bold",
                        color: "#e3f2fd"
                    }}>
                        About
            </NavLink>
                </li>
                <li>
                    <NavLink to={{ pathname: "/tours" }} activeClassName="is-active" className="nav-link" activeStyle={{
                        fontWeight: "bold",
                        color: "#e3f2fd"
                    }}>
                        Tours
            </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="is-active" className="nav-link" exact={true}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#e3f2fd"
                        }} >
                        Contact
            </NavLink>
                </li>

            </ul>

        </nav>
    )
}
