
import React, { useState, useEffect } from 'react'
import { fetchAllCategories, fetchAllProduct } from '../services/UserService'

import Shopitems from '../components/shopitems';

const categories = () => {

  const [categories, setCategories] = useState([])
  const [data, setData] = useState([])
  const [fileter, setFileter] = useState(data)
  useEffect(() => {
    getAllCategories()
  }, [])

  const getAllCategories = async () => {
    const res = await fetchAllCategories()

    if (res && res.length > 0) {
      setCategories(res)

    }
  }

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const data = await fetchAllProduct()
    if (data && data.length > 0) {
      setData(data)
      setFileter(data)
    }
  }

  const fileterProduct = (name) => {
    const uploadList = data.filter((i) => i.category === name)
    console.log('check >>>>', uploadList)
    setFileter(uploadList)
  }

  console.log('check data:', data)
  return (
    <>
      <section className='categori'>
        <div className='container-xxl'>
          <div className='row pt-5'>
            <div className=' gap-4 d-flex justify-content-center '>
              <div>
                <button
                  onClick={() => setFileter(data)}
                  className='btn btn-outline-success fs-5 '
                >All Categori</button>
              </div>
              {
                categories && categories.length > 0 && categories.map((categori) => (
                  <div className='' >
                    <button
                      onClick={() => fileterProduct(categori)}
                      className='btn btn-outline-success fs-5 '
                    >
                      {categori}
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <Shopitems
              data={fileter}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default categories
