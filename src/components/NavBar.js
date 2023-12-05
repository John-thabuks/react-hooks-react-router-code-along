import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

function NavBar() {
    return (
        <div>

            {/* Home */}
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={
                    { background: "darkblue" }
                }>

                Home
            </NavLink>

            {/* About */}
            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={
                    { background: "darkblue" }
                }>

                About
            </NavLink>

            {/* Login */}
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={
                    { background: "darkblue" }
                }>

                Login
            </NavLink>

            {/* Sign up */}
            <NavLink
                to="/sign up"
                exact
                style={linkStyles}
                activeStyle={
                    { background: "darkblue" }
                }>
                Sign up
            </NavLink>

            {/* Message */}
            <NavLink
                to="/message"
                exact
                style={linkStyles}
                activeStyle={
                    { background: "darkblue" }
                }
            >
                Message
            </NavLink>

        </div>
    )
}

export default NavBar