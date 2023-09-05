import React from 'react'
import { BsFillBellFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
const DbHeader = () => {
  return (
    <>
      <div className='dashboard_right_header'>
        <div className='fs-4'>
          Welcome to Apneck
        </div>
        <div className=' d-flex align-items-center gap-4 '>
          <input type="text" placeholder="Search..." name="text" className="input" />
          <div
            className='dashboard_right_header-FillBell'>
            <BsFillBellFill />
            <p>10</p>
          </div>
          <div
            className='dashboard_right_header-FillBell'>
            <FaUserAlt />
          </div>
          <div
            className='dashboard_right_header-FillBell me-3'>
            <MdLogout />
          </div>
        </div>
      </div>
    </>
  )
}

export default DbHeader
