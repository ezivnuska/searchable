import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from 'routes'

import './Navbar.scss'

const Navbar = () => (
  <div className='navbar'>
    <ul className='container'>
      {routes.map(({ name, path }, key) => (
        <li key={key}>
          <NavLink exact activeClassName='active' to={path}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

export default Navbar