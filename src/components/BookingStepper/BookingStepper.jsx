import React, { useState, useRef, useEffect } from 'react';
import {
  FaUser, FaEnvelope, FaCalendarAlt, FaCreditCard, FaLock, FaDownload
} from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  const [ticketData, setTicketData] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef();

  // Reset form when destination changes
  useEffect(() => {
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      cardNumber: '',
      expiry: '',
      cvc: ''
    });
    setErrors({});
    setTicketData(null);
  }, [destination]);

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
      if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, '')))
        newErrors.cardNumber = 'Invalid card number';
      if (!/^\d{2}\/\d{2}$/.test(formData.expiry))
        newErrors.expiry = 'Invalid expiry date';
      if (!/^\d{3}$/.test(formData.cvc))
        newErrors.cvc = 'Invalid CVC';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateBookingReference = () => {
    return `BOOK-${Math.random().toString(36).slice(2, 11).toUpperCase()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      if (validateStep(1)) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep(2)) {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate async processing
        setIsLoading(false);
        setTicketData({
          name: formData.name,
          email: formData.email,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          bookingId: generateBookingReference(),
          destination: destination.name,
          price: destination.price
        });
        setCurrentStep(3); // Move to step 3 to display ticket
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Download function uses inline background and text colors to avoid using any unsupported CSS (like oklch)
  const downloadTicket = async (format = 'pdf') => {
    const input = ticketRef.current;
    if (!input) {
      alert("Ticket not ready for download. Please wait a moment and try again.");
      return;
    }
    
    setIsDownloading(true);
    
    try {
      // Allow a short delay for the element and its images to fully render
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      const canvas = await html2canvas(input, {
        useCORS: true,
        scale: 2,
        backgroundColor: "#ffffff"
      });
      
      if (format === 'pdf') {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('booking_ticket.pdf');
      } else if (format === 'image') {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'booking_ticket.png';
        link.click();
      }
    } catch (error) {
      console.error("Error generating ticket:", error);
      alert("Failed to generate ticket. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      checkIn: '',
      checkOut: '',
      cardNumber: '',
      expiry: '',
      cvc: ''
    });
    setErrors({});
    setTicketData(null);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="pl-10 w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="pl-10 w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
              <input
                name="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="pl-10 w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.checkIn && (
                <span className="text-red-500 text-sm">{errors.checkIn}</span>
              )}
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
              <input
                name="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="pl-10 w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.checkOut && (
                <span className="text-red-500 text-sm">{errors.checkOut}</span>
              )}
            </div>
          </div>
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
                className="pl-10 w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.cardNumber && (
                <span className="text-red-500 text-sm">{errors.cardNumber}</span>
              )}
            </div>
            <div className="relative">
              <input
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.expiry && (
                <span className="text-red-500 text-sm">{errors.expiry}</span>
              )}
            </div>
            <div className="relative">
              <FaLock className="absolute top-4 left-3 text-gray-400" />
              <input
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
                placeholder="CVC"
                className="pl-10 w-full border border-gray-300 rounded-lg p-3"
              />
              {errors.cvc && (
                <span className="text-red-500 text-sm">{errors.cvc}</span>
              )}
            </div>
          </div>
        );
      case 3:
        if (!ticketData) {
          return (
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Loading ticket data...</h3>
              <p className="text-gray-600">
                Please wait while we generate your ticket.
              </p>
            </div>
          );
        }
        return (
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Your booking for <strong>{destination.name}</strong> has been confirmed.
            </p>
            <div
              ref={ticketRef}
              className="mt-4 border p-4 rounded-xl"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                        }}
                      >
                        <h4 className="text-lg font-semibold mb-2">🎟 Booking Ticket</h4>
                        <div className="w-full flex justify-center mb-2">
                        <img
                          src={Logo}
                          alt="logo"
                          className="object-contain"
                          style={{ maxWidth: "80%", height: "auto" }}
                        />
                        </div>

                        <p>
                        <strong>Name:</strong> {ticketData.name}
                        </p>
                        <p>
                        <strong>Booking ID:</strong> {ticketData.bookingId}
                        </p>
                        <p>
                        <strong>Destination:</strong> {ticketData.destination}
                        </p>
                        <p>
                        <strong>Check-in:</strong> {ticketData.checkIn}
                        </p>
                        <p>
                        <strong>Check-out:</strong> {ticketData.checkOut}
                        </p>
                        <p>
                        <strong>Total Price:</strong> ${ticketData.price}
                        </p>
                      </div>
                      <div className="flex gap-4 mt-4 justify-center">
                        <button
                        onClick={() => downloadTicket('pdf')}
                        disabled={isDownloading}
                        className={`bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 flex items-center gap-2 ${
                          isDownloading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        >
                        <FaDownload />
                        {isDownloading ? 'Generating...' : 'Download as PDF'}
                        </button>
                        <button
                        onClick={() => downloadTicket('image')}
                        disabled={isDownloading}
                        className={`bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 flex items-center gap-2 ${
                          isDownloading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        >
                        <FaDownload />
                        {isDownloading ? 'Generating...' : 'Download as Image'}
                        </button>
                      </div>
                      <button
                        onClick={() => {
                resetForm();
                onClose();
              }}
              className="block w-full bg-black text-white py-3 px-8 mt-4 rounded-lg hover:bg-gray-800 font-medium"
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
      <div className="bg-white m-2 rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl"
        >
          ×
        </button>
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="logo" className="h-12" />
        </div>
        {currentStep < 3 && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">{destination.name}</h2>
            <p className="text-gray-600 mb-4">${destination.price}/3 days</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {renderFormStep()}
          {currentStep < 3 && (
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-300"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`ml-auto bg-black text-white py-3 px-8 rounded-lg ${
                  isLoading ? 'opacity-75' : 'hover:bg-gray-800'
                }`}
              >
                {isLoading
                  ? 'Processing...'
                  : currentStep === 2
                  ? 'Confirm Payment'
                  : 'Continue'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingStepper;
