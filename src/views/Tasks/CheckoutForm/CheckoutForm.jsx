import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { payment, getUserDetail } from "../../../services/UserService";
import { useParams, useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [user, setUser] = useState();
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserDetail(userId).then((user) => setUser(user));
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
    } else if (paymentMethod) {
      const { id } = paymentMethod;
      payment({ amount: 15, hiredUserId: userId, paymentId: id })
        .then(result => {
            navigate("/hired");
          }
        );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <h5>Hire {user?.email}'s  services!</h5>
      </div>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Hire!
      </button>
    </form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckoutForm = () => (
  <div className="d-flex text-center align-items-center flex-column justify-content-center">
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  </div>
);

export default CheckoutForm;
