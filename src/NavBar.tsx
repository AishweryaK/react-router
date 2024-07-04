import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/contact/aish"}>Contact for aish</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
