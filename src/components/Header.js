import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import deleteImg from "../assets/images/deleteImg.png";
import { REMOVE } from '../redux/actions/Action';

const Header = () => {

    const dispatch = useDispatch();
    const getData = useSelector((state) => state.Cartreducer);
    const cartData = getData.carts;
    // console.log("Cart data is here", cartData);

    const removeData = (item) => {
        dispatch(REMOVE(item));
    }

    return (
        <>
            <div className='header'>
                <div className='header_wrapper'>
                    <h3>Online Shop</h3>
                    {cartData.length > 0 ? (
                        <div className="dropdown cart_dropdown">
                            <div className='cart_item_count dropdown-toggle' data-toggle="dropdown">{cartData.length}</div>
                            <div className="dropdown-menu">
                                {getData.carts.length <= 0 ? <p style={{ color: "red", marginBottom: 0 }}>No Item in your cart</p> :
                                    cartData.slice(0).reverse().map((item) => {
                                        return (
                                            <div className="cart_item" key={item.id}>
                                                <div className='cart_item_img'>
                                                    <img src={item.img} alt={item.name} />
                                                </div>
                                                <div className='cart_item_info ml-2'>
                                                    <p className='mb-0'>{item.name}</p>
                                                    <p className='mb-0'> {item.price} </p>
                                                    <img src={deleteImg} alt="delete icon" onClick={() => removeData(item)} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                        :
                        null
                    }
                </div>
            </div>
        </>
    )
}

export default Header