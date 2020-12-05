import React from 'react';
import { connect } from 'react-redux';
import {addCart} from '../../redux/actions/addAction';

const Products = (props) => {
    // console.log(props)
    const {shirt, addCart} = props;
    const {id, name, price, img} = shirt;
    return (
        <div className="col-md-3 mt-5 mb-5 img-cart">
            <img style={{width: '200px'}} className="img-fluid card-img" src={img} alt=""/>
            <h5>{name}</h5>
            <h5>$  {price}</h5>
            <a onClick={addCart} style={{width: '200px'}} className="add-cart" href="#">Add to Cart</a>
        </div>
    );
};

export default connect(null, {addCart})(Products);