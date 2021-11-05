import React, { Component } from "react";
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

class Main extends Component {
    render() {
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
                        <div className="row">
                        <div className="card col-md " style={{ width: "30rem" }}>
                            <h3> 600x900mm </h3>
                            <div id="carouselExampleControls" className="carousel carousel-dark slide mb-5 card" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <div className="card">
                                            <ProductItem />
                                            <img src={Love} className="  card-img-top image" alt="Card image cap" />
                                            <div className="  d-md-block card-body mb-3">
                                                <h3>love</h3>
                                                <p>Acrylic on canvas, $800 </p>
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="carousel-item " data-bs-interval="2000">
                                        <div className="card">
                                        <ProductItem />
                                            <img src={set} className=" card-img-top" alt="Card image cap" />
                                            <div className="card-body mb-3 d-md-block">
                                                <h3>Hard Set</h3>
                                                <p>Acrylic on canvas, $800 </p>
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                    <div className="carousel-item " data-bs-interval="10000">
                                        <div className="card">
                                            <img src={sisters} className="  card-img-top image" alt="Card image cap" />
                                            <div className="  d-md-block card-body mb-3">
                                                <h3>Five sisters</h3>
                                                <p>Acrylic on canvas,  </p>
                                            </div>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                            <div className="card col-md" style={{ width: "30rem" }}>
                                <h3>600x900mm</h3>
                                    <div id="carouseDark" className="carousel carousel-dark slide mb-5 " data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <div className="card" >
                                                <ProductItem />
                                                    <img src={taking} className="card-img-top image" alt="Card image cap" />
                                                    <div className="card-body mb-3 d-md-block">
                                                        <h3>Taking</h3>
                                                        <p>Acrylic on canvas, $800 </p>
                                                    </div>
                                                    <br/>
                                                </div>    
                                            </div>
                                            <div className="carousel-item " data-bs-interval="10000">
                                                <div className="card " >
                                                    <img src={burst} className="card-img-top image" alt="Card image cap"  />
                                                    <div className="card-body mb-3d-none d-md-block">
                                                        <h3>Burst</h3>
                                                        <p>Acrylic on canvas, $800</p>
                                                    </div>
                                                    <ProductItem />
                                                    <br/>
                                                </div>    
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                <br/>
                            </div>
                        </div>
                        <div className="row">
                        <div className="group col-md" style={{ width: "30rem" }}>
                        <h3>600x900mm</h3>
                        <div id="carouseDark" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="card">
                                        <img src={guruwa} className=" card-img-top image" alt="Card image cap" />
                                        <div className="card-body mb-3 d-md-block">
                                            <h3>Guruwa</h3>
                                            <p>Acrylic on canvas, $800 </p>
                                        </div>
                                        <ProductItem />
                                        <br/>
                                    </div>    
                                </div>
                                <div className="carousel-item " data-bs-interval="10000">
                                    <div className="card">
                                        <img src={intergration} className=" card-img-top image" alt="Card image cap"  />
                                        <div className="card-body mb-3d-none d-md-block">
                                            <h3>Boundaries</h3>
                                            <p>Acrylic on canvas, $800</p>
                                        </div>
                                        <ProductItem />
                                        <br/>
                                    </div>    
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <br/>
                        </div>
                        
                        <div className="card col-md" style={{ width: "30rem" }}>
                        <h3>450mmx600mm</h3>
                        
                        <div id="carouseDark" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <div className="card " >
                                        <img src={ray} className="card-img-top image " alt="Card image cap" />
                                        <div className="card-body mb-3 d-md-block">
                                            <h3>Ray</h3>
                                            <p>Acrylic on canvas, $350 </p>
                                        </div>
                                        <br/>
                                    </div>    
                                </div>
                                <div className="carousel-item " data-bs-interval="10000">
                                    <div className="card " >
                                        <img src={rain} className="card-img-top image " alt="Card image cap"  />
                                        <div className="card-body mb-3d-none d-md-block ">
                                            <h3>Rain</h3>
                                            <p>Oil on canvas, $400</p>
                                        </div>
                                        <br/>
                                    </div>    
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <br/>
                        </div>
                        </div>
                        <div className="row">
                                <div className="card col-md" tyle={{ width: "30rem" }}>
                                    <div className="card mb-3 col-md" s>
                                        <img className="card-img-top image" src={anger} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Winthali</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text">Oil on canvas</p>
                                            
                                        </div>
                                    </div>
                                        <br/>
                                </div>  
                            <div className="card col-md" style={{ width: "30rem" }}>
                                    <div className="card col-md" >
                                        <img className="card-img-top image" src={burning} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Burning and burnt</h5>
                                            <p className="card-text">Fire isn't just destruction, but also the begining of new life. If regular burings aren't done then the landscape can become dangerous. The mind is no different.</p>
                                            <p className="card-text">Acrylic on canvas</p>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
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
};

export default Main;