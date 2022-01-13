import React, { useEffect } from 'react';
import ebbs from '../assests/paintings/reds/ebbs.JPG';
import guruwa from '../assests/paintings/blues/guruwa.jpg';
import winthali from '../assests/paintings/reds/winthali.PNG';
import burning from '../assests/paintings/reds/burning.jpg';
import boundaries from '../assests/paintings/reds/boundaries.jpg';
import set from '../assests/paintings/reds/set.jpg';
import dad from '../assests/dad.jpg';
import giki from '../assests/giki.jpg';
import me from '../assests/me.jpg';
import burst from '../assests/paintings/reds/burst.jpg';
import Love from '../assests/paintings/reds/love.jpg';
import sisters from '../assests/paintings/reds/sisters.jpg';
import taking from '../assests/paintings/reds/taking.jpg';
import intergration from '../assests/paintings/blues/intergation.jpg';
// import ContactForm from "../components/Contact/contact";
import rain from '../assests/paintings/blues/rain.jpg';
import ray from '../assests/paintings/blues/ray.jpg';

import anger from '../assests/paintings/reds/anger.jpg';
import ProductList from "../components/ProductList/index.js";
// import CategoryMenu from "../components/CategoryMenu/index.js";
import Cart from "../components/Cart/index.js";
import ProductItem from '../components/ProductItem/index.js';

import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assests/spinner.gif';

function Main() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  
    const { currentCategory } = state;
  
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products,
          });
          data.products.forEach((product) => {
            idbPromise('products', 'put', product);
          });
        } else if (!loading) {
          idbPromise('products', 'get').then((products) => {
            dispatch({
              type: UPDATE_PRODUCTS,
              products: products,
            });
          });
        }
      }, [data, loading, dispatch]);
    
      function filterProducts() {
        if (!currentCategory) {
          return state.products;
        }
    
        return state.products.filter(
          (product) => product.category._id === currentCategory
        );
      }

        return (
            <>
            {/* <div className="container-fluid"> */}
                <div className="intro mb-3">
                    <p><b>
                    Munmia is a Bunuba artist. </b>
                    </p><p><b>
                    She grew up on Country, 
                    in Fitzroy Crossing, the Kimberly, 
                    Western Australia. 
                    The most beautiful country in the world.
                    </b>
                    </p>
                </div>
            {/* </div> */}
                <div className="image-container " >
                    <img src={me} className=" img-fluid" alt="Card image cap" style={{height:"30%"}}/>
                
                    <div className="overlay  ">
                        
                        <h2 className="mb-3 about" id="title">About</h2>
                            <div className="about mb-3">
                                <p> 
                                    <b>Munmia is her Aboriginal name given to her by her grandparents.
                                    They pick names from five generations ago, so they knew those people,
                                    yet their passing was long enough ago for the names to be said again.
                                </b>
                                </p>
                                <p>
                                    Munmia has only been painting from the beginning of 2021. The same time she started therapy.
                                    There is no coincidence there as to create meaingful art the artist has to be in touch with there emotions and self.
                                    Something that sadly had not always been the case. 
                                    </p>
                                    <p>
                                    Coming to this realisation has made Munmia a huge mental health advocate for the wider community and especially for Indigenous peoples. 
                                    Needless to say, her art is her therapy.
                                </p>

                            </div>
                    </div>
                </div>    
                <div className="cards  container">
                    <div className="row">
                        {/* <CategoryMenu /> */}
                        {/* <ProductList /> */}
                        {/* <Cart /> */}

                        <h1 id="title"> Featured Originals </h1>
                        <br />
                        <hr></hr>

                        <div>
                            {state.products.length ? (
                                <div className="flex-row">
                                    {filterProducts().map((product) => (
                                        <ProductItem
                                        key={product._id}
                                        _id={product._id}
                                        image={product.image}
                                        description={product.description}
                                        name={product.name}
                                        price={product.price}
                                        quantity={product.quantity}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <h3>You haven't added any products yet!</h3>
                            )}
                        </div>

                        <div className="row">
                            <div className="card col-md" style={{ width: "30rem" }}>
                                <div className="card col-md" >
                                    <img className="card-img-top image" src={winthali} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Winthali</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Oil on canvas</p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                </div>
            </>
            
        )
};

export default Main;