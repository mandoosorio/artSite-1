import React from "react";
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise} from "../../utils/helpers";
// import Love from '../assests/paintings/reds/love.jpg';

function ProductItem(item) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const {
        image,
        name,
        _id,
        price,
        quantity
    } = item;

    const { cart } = state;
    
    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuanity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: {...item, purchaseQuantity: 1}
            });
            idbPromise('cart', 'put', {...item, purchaseQuantity: 1 });
        }
    }

    // key={product._id}
    //   _id={product._id}
    //   image={product.image}
    //   name={product.name}
    //   price={product.price}
    //   quantity={product.quantity}
    return (
        <div className="card col-md" tyle={{ width: "30rem" }}>
            <div className="card mb-3 col-md" s>
                <img className="card-img-top image" src={`/images/${image}`} alt={`/images/${image}`} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Oil on canvas</p>
                    <div>
                        <div>{quantity} {pluralize("item", quantity)} in stock</div> 
                        <span>{price}</span>
                    </div>
                    <button className="addBtn" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
                <br/>
        </div>
    );
}

export default ProductItem;