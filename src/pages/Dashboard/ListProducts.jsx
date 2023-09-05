import React from 'react'
import { useState, useEffect } from 'react'
import { fetchAllProduct } from '../../services/UserService'
const ListProducts = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getDatatable()
  }, [])

  const getDatatable = async () => {
    const res = await fetchAllProduct()
    if (res && res.length > 0) {
      setData(res)
    }
  }

  return (
    <>
      <div className='table_list'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.length > 0 && data.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td className='w-50 table_list-item-title'>{item.title}</td>
                  <td>{item.price}</td>
                  <td className='d-flex gap-4'>
                    <button className='btn btn-outline-info'>Edit</button>
                    <button className='btn btn-outline-danger'>Remove</button>
                    <button className='btn btn-outline-success'>Detail</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListProducts
