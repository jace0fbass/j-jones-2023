import React from "react";
import '../../css/App.css'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
<nav id="navigate" className="navbar mx-auto">
    <Link className="m-2" to="/AboutMe">About</Link>
    <Link className="m-2" to="/Portfolio">Portfolio</Link>
    <Link className="m-2" to="/Resume">Resume</Link>
    <Link className="m-2" to="/Contact">Contact</Link>

</nav>
    )
}
export default Navbar