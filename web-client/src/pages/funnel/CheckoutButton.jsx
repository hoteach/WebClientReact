import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripeKey = import.meta.env.VITE_STRIPE_PK;
const stripePromise = loadStripe(stripeKey); 

const CheckoutButton = () => {

  const handleCheckout = async () => {
    console.log("session.id");
    const response = await fetch('https://hoteachapi.azurewebsites.net/api/PaymentSession?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(response);

    const session = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id
    });
    if (error) {
      console.error('Stripe Checkout Error:', error);
    }
  };

  return (
    <button onClick={handleCheckout} className="bg-maincol border-2 border-black text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:from-orange-600 hover:to-red-600 transition duration-300 flex items-center justify-center w-full">
      Buy Now
    </button>
  );
};

export default CheckoutButton;
