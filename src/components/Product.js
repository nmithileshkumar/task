import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { VIEW } from '../redux/actions/Action';

const Product = (props) => {

  const {name, img, price} = props.prod;
  const dispatch = useDispatch();
  
  const viewData = (props) => {
    dispatch(VIEW(props));
  }
  
  return (
    
    <div className='col-md-3 mb-4'>
        <div className="card text-center">
            <img className="card-img-top img-fluid" src={img} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price} </p>
                <Link to="/productdetail"  onClick={()=> viewData(props.prod)} className='btn theme_btn2 w-100 mt-1'>View detail</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Product