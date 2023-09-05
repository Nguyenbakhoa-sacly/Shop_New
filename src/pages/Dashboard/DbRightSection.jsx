import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddnewItem from './AddnewItem'
import ListProducts from './ListProducts'
import ListUsers from './ListUsers'
import DbHeader from './DbHeader'
const DbRightSection = () => {
  return (

    <>
      <div className='dashboard_right '>
        <DbHeader />
        <div className=' overflow-auto  dashboard_right-scrollbar'>
          <Routes>
            <Route path='/list' element={<ListProducts />} />
            <Route path='/addnew' element={<AddnewItem />} />
            <Route path='/users' element={<ListUsers />} />
          </Routes>
        </div>
      </div>
    </>

  )
}

export default DbRightSection
