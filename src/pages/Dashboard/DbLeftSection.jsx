import React from 'react'
import logo from '../../assets/images/apneck.png'
import { Link, NavLink } from 'react-router-dom'
const DbLeftSection = () => {
  return (
    <>
      <div className='dashboard_left'>
        <Link className='logo'>
          <img src={logo} alt='logo' />
        </Link>
        <hr />
        <ul className='dashboard_left_list'>

          <NavLink to={'/dashboard/list'}
            className={({ isActive }) =>
              isActive ? 'isAactiveStyles' : ''
            }
          >
            <li > List products </li>
          </NavLink>
          <hr />
          <NavLink to={'/dashboard/addnew'}
            className={({ isActive }) =>
              isActive ? 'isAactiveStyles' : ''
            }
          >
            <li > Add new product</li>
          </NavLink>
          <hr />
          <NavLink to={'/dashboard/users'}
            className={({ isActive }) =>
              isActive ? 'isAactiveStyles' : ''
            }
          >
            <li > Users </li>
          </NavLink>
          <hr />

        </ul>
      </div>
    </>
  )
}

export default DbLeftSection
