import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/actions/Action';

const Productdetail = () => {
    
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.Viewreducer);
    const viewData = getData.viewProducts;
    // console.log("Data is here", viewData);
    const {name, img, price} = viewData;

    const sendData = (viewData) => {
        dispatch(ADD(viewData));
    }

  return (
    <div className='container mt-5 mb-5'>
        <div className='cart_item_detail'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='cart_item_detail_img'>
                        <img src={img} alt={name} className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='cart_item_detail_info'>
                        <div className='cart_item_detail_info_desc'>
                            <div className='pro_name'>
                                <p><b>Product name:</b></p>
                                <p>{name}</p>
                            </div>
                            <div className='pro_price'>
                                <p><b>Price:</b></p>
                                <p>{price}</p>
                            </div>
                            <button className="btn theme_btn w-100" onClick={() => sendData(viewData)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productdetail