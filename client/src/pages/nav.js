import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';
import Logo from '../assests/m.PNG';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Cart from '../components/Cart/index.js';

const SERVICE_ID = "service_nkazh0j";
const TEMPLATE_ID = "template_8cxz3se";
const USER_ID = "user_zAutm7UYCBSXMkVu3IaOs";
// import ContactForm from "../components/Contact/contact";

const Navbar = () =>{
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };
    
        return (

            <div className="navbar sticky-top  container-fluid" id="myNav">
                
                    <div className="navbar-brand d-flex">
                        <div className="row">
                            <div className="col-xs-6 md-4"> 
                                <img src={Logo} style={{width: "70px", height: "70px"}} alt="React App Logo" className="d-inline-block logo"/>
                            </div>
                            <div className="col-xs-6 md-4">
                                <h1 className="d-inline-block logo" id="title">Munmia</h1>
                            </div>
                        </div>
                    </div>
                            
                    <div className="inline-block d-flex right">
                        <div className="d-flex  d-inline-block ">
                            <button className="btn btn-clear"> <h2><i className="bi bi-person"></i></h2> </button>
                            <button className="btn btn-clear navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseEx" aria-expanded="false" aria-controls="collapseExample">
                               <h2><Cart/></h2> </button>
                            <div className="col">
                              <div className="collapse" id="collapseEx">
                                <div className="card-body">
                                  {/* <Cart /> */}
                                </div>
                              </div>
                            </div>
                        </div>
                            <div className="row d-flex">
                                <button  className="btn btn-clear navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><h2><i className="bi bi-envelope"></i></h2> </button>
                                <div className="col">
                                    <div className=" collapse" id="collapseExample">
                                        <div className="  card-body">
                                            <Form onSubmit={handleOnSubmit} className="form-inline">
                                                <Form.Field
                                                    id='form-input-control-email'
                                                    control={Input}
                                                    label='Email'
                                                    name='reply_to'
                                                    placeholder='Email…'
                                                    required
                                                    icon='mail'
                                                    iconPosition='left'
                                                />
                                                <Form.Field
                                                    id='form-input-control-last-name'
                                                    control={Input}
                                                    label='Name'
                                                    name='from_name'
                                                    placeholder='Name…'
                                                    required
                                                    icon='user circle'
                                                    iconPosition='left'
                                                />
                                                <Form.Field
                                                    id='form-textarea-control-opinion'
                                                    control={TextArea}
                                                    label='Message'
                                                    name='message'
                                                    placeholder='Message…'
                                                    required
                                                />
                                                <Button type='submit' color='green'>Submit</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        
                    </div>
                
            </div>
        );
    
};

export default Navbar;