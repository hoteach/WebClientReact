import CheckoutButton from "./CheckoutButton";

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const FunnelPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with email:', email);
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Boost Your Programming Career</h1>
        
        <div className="space-y-4 mb-6">
          <FeatureItem text="200+ materials including project ideas" />
          <FeatureItem text="Step-by-step project creation guide" />
          <FeatureItem text="Personalized project review (limited offer)" />
        </div>

        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-secondary">Only 13.34 лв</p>
          <p className="text-sm text-gray-600">30-day satisfaction guarantee</p>
        </div>

        <CheckoutButton />
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => (
  <div className="flex items-center">
    <Check className="text-green-500 mr-2" size={20} />
    <span>{text}</span>
  </div>
);

export default FunnelPage;