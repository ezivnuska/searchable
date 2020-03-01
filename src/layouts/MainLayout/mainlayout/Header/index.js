import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Icon } from 'components'

import './Header.scss'

const Header = props => (
  <header>
      <div id='logo-wrapper' className='container'>
        <NavLink to='/'>
          Search<span>able</span>
          {/*<Icon iconClass='fas fa-map fa-5x' />*/}
        </NavLink>
      </div>
  </header>
)

export default Header
