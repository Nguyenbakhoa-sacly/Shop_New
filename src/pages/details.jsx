/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Productdetails from '../components/productdetails'
import { useParams } from 'react-router-dom'
import { fetchDetailProduct, fetchAllProduct } from '../services/UserService'

const details = () => {
  const [data, setData] = useState([])
  const [dataDetail, setDataDetail] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDetailProduct(id);
    getData();
  }, [])

  //
  const getDetailProduct = async (id) => {
    let res = await fetchDetailProduct(id)
    if (res) {
      setDataDetail(res)
    }
  }
  //
  const getData = async () => {
    let data = await fetchAllProduct();
    if (data && data.length > 0) {
      setData(data)
    }

  }

  return <>
    <section className="product-details p-5">
      <div className="conntainer-xxl">
        <div className="row">
          <Productdetails
            dataDetail={dataDetail}
            data={data}
          />
        </div>
      </div>
    </section>
  </>
}

export default details