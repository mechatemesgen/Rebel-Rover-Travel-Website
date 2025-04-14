import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaCreditCard, FaLock, FaCheck } from 'react-icons/fa';
import Logo from '../../assets/PlaceholderImages/Logos/FooterLogo.png';

function BookingStepper({ isOpen, onClose, destination }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !destination) return null;

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
      if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
      if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    }
    if (step === 2) {
      if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Invalid card number';
      if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) newErrors.expiry = 'Invalid expiry date';
      if (!/^\d{3}$/.test(formData.cvc)) newErrors.cvc = 'Invalid CVC';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      if (validateStep(currentStep)) {
        setCurrentStep(prev => prev + 1);
      }
    } else {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderProgressSteps = () => (
    <div className="flex justify-center mb-6">
      {[1, 2, 3].map(step => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${currentStep >= step ? 'bg-black text-white' : 'bg-gray-200'} 
              ${step > 1 ? 'ml-2' : ''}`}
          >
            {currentStep > step ? <FaCheck /> : step}
          </div>
          {step < 3 && <div className={`h-1 w-6 ${currentStep > step ? 'bg-black' : 'bg-gray-200'}`} />}
        </div>
      ))}
    </div>
  );

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute top-4 left-3 text-gray-400" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div className="relative">
                <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
                <input
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.checkIn && <span className="text-red-500 text-sm">{errors.checkIn}</span>}
              </div>
              <div className="relative">
                <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
                <input
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                {errors.checkOut && <span className="text-red-500 text-sm">{errors.checkOut}</span>}
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                Your booking is protected by our{" "}
                <span className="font-semibold">secure payment system</span>
              </p>
            </div>
          </>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative col-span-2">
              <FaCreditCard className="absolute top-4 left-3 text-gray-400" />
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
            </div>
            <div className="relative">
              <input
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.expiry && <span className="text-red-500 text-sm">{errors.expiry}</span>}
            </div>
            <div className="relative">
              <FaLock className="absolute top-4 left-3 text-gray-400" />
              <input
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
                placeholder="CVC"
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors.cvc && <span className="text-red-500 text-sm">{errors.cvc}</span>}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center p-6">
            <div className="inline-block bg-green-100 rounded-full p-4 mb-4">
              <FaCheck className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Your booking for {destination.name} has been successfully confirmed.
              A confirmation email has been sent to {formData.email}.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-all font-medium"
            >
              Close
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white m-2 rounded-2xl shadow-xl w-full max-w-lg p-6 relative overflow-y-auto max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl"
        >
          &times;
        </button>

        <div className="flex justify-center mb-6">
          <img src={Logo} alt="logo" className="h-12" />
        </div>

        {!isSubmitted && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">{destination.name}</h2>
            <p className="text-gray-600 mb-4">${destination.price}/3 days</p>
          </div>
        )}

        {!isSubmitted && renderProgressSteps()}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {renderFormStep()}

          {!isSubmitted && currentStep < 3 && (
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`ml-auto bg-black text-white py-3 px-8 rounded-lg transition-all ${isLoading ? 'opacity-75' : 'hover:bg-gray-800'}`}
              >
                {isLoading ? 'Processing...' : currentStep === 2 ? 'Confirm Payment' : 'Continue'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingStepper;
