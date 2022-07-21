import React from 'react'
import Product from './Product';
import { ItemData } from '../ItemData';

const Products = () => {

  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          {ItemData.map((prod) => {
            return (
              <Product key={prod.id} prod={prod} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products