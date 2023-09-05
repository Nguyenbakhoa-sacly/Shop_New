
import React, { useContext } from 'react'

import Prod from './prod';

const shopitems = (props) => {
  const { data } = props
  return <>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

      <Prod data={data} />

    </div>
  </>
}

export default shopitems