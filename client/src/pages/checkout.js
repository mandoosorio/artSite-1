import React, { useState, useEffect } from "react";
import "../App.css";

const ProductDisplay = () => (
  <section className="row">
    <div className="card " >
      <div className="product ">
        <img className=""
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Painting</h3>
        <h5>A$750.00</h5>
        </div>
      </div>
      <form action="/create-checkout-session" method="POST">
        <button className="addBtn" type="submit">
          Checkout
        </button>
      </form>
    </div>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

// export default Checkout;