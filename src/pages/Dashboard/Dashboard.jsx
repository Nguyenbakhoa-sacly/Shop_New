

import React from 'react'
import DbLeftSection from './DbLeftSection'
import DbRightSection from './DbRightSection'
const Dashboard = () => {
  return (
    <>
      <div className='d-flex'>
        <DbLeftSection />
        <DbRightSection />
      </div>
    </>
  )
}

export default Dashboard
