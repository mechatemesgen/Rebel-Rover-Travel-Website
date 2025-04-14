import React, { useState, useRef, useEffect } from 'react';
import {
  FaUser, FaEnvelope, FaCalendarAlt, FaCreditCard, FaLock, FaDownload
} from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';
import { QRCodeSVG } from 'qrcode.react';
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
        await new Promise((resolve) => setTimeout(resolve, 1500)); 
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
        setCurrentStep(3); 
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const downloadTicket = async (format = 'pdf') => {
    const input = ticketRef.current;
    if (!input) {
      import('sweetalert2').then(Swal => {
        Swal.default.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ticket not ready for download. Please wait a moment and try again.',
        });
      });
      return;
    }

    setIsDownloading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const canvas = await html2canvas(input, {
        useCORS: true,
        scale: 2,
        backgroundColor: "#ffffff"
      });

      if (format === 'pdf') {
        const canvas = await html2canvas(input, {
          useCORS: true,
          backgroundColor: '#ffffff',
        });
      
        const imgData = canvas.toDataURL('image/png');
      
        const canvasWidthPx = canvas.width;
        const canvasHeightPx = canvas.height;
      
        const pxToMm = (px) => px / 3.7795;
        const pdfWidth = pxToMm(canvasWidthPx);
        const pdfHeight = pxToMm(canvasHeightPx);
      
        const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('booking_ticket.pdf');
      }
      
      else if (format === 'image') {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'booking_ticket.png';
        link.click();
      }
    } catch (error) {
      console.error("Error generating ticket:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to generate ticket. Please try again.',
      });
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ maxHeight: 'calc(100vh - 10rem)', overflowY: 'auto' }}>
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-400" />
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                placeholder="Full Name" 
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.name && <span className="text-red-500 text-xs sm:text-sm">{errors.name}</span>}
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleInputChange}
                placeholder="Email Address" 
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.email && <span className="text-red-500 text-xs sm:text-sm">{errors.email}</span>}
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
              <input 
                name="checkIn" 
                type="date" 
                value={formData.checkIn} 
                onChange={handleInputChange}
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.checkIn && <span className="text-red-500 text-xs sm:text-sm">{errors.checkIn}</span>}
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute top-4 left-3 text-gray-400" />
              <input 
                name="checkOut" 
                type="date" 
                value={formData.checkOut} 
                onChange={handleInputChange}
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.checkOut && <span className="text-red-500 text-xs sm:text-sm">{errors.checkOut}</span>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ maxHeight: 'calc(100vh - 10rem)', overflowY: 'auto' }}>
            <div className="relative col-span-2">
              <FaCreditCard className="absolute top-4 left-3 text-gray-400" />
              <input 
                name="cardNumber" 
                value={formData.cardNumber} 
                onChange={handleInputChange}
                placeholder="Card Number" 
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.cardNumber && <span className="text-red-500 text-xs sm:text-sm">{errors.cardNumber}</span>}
            </div>
            <div className="relative">
              <input 
                name="expiry" 
                value={formData.expiry} 
                onChange={handleInputChange}
                placeholder="MM/YY" 
                className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.expiry && <span className="text-red-500 text-xs sm:text-sm">{errors.expiry}</span>}
            </div>
            <div className="relative">
              <FaLock className="absolute top-4 left-3 text-gray-400" />
              <input 
                name="cvc" 
                value={formData.cvc} 
                onChange={handleInputChange}
                placeholder="CVC" 
                className="pl-10 w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base" 
              />
              {errors.cvc && <span className="text-red-500 text-xs sm:text-sm">{errors.cvc}</span>}
            </div>
          </div>
        );
      case 3:
        if (!ticketData) {
          return (
            <div style={{ textAlign: 'center', padding: '1.5rem', maxHeight: 'calc(100vh - 10rem)', overflowY: 'auto' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Loading ticket data...</h3>
              <p style={{ color: '#6b7280' }}>Please wait while we generate your ticket.</p>
            </div>
          );
        }
        return (
          <div style={{ textAlign: 'center', padding: '1.5rem', maxHeight: 'calc(100vh - 10rem)', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#10B981' }}>Booking Confirmed!</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Your booking for <strong>{destination.name}</strong> has been confirmed.
            </p>
            <div
              ref={ticketRef}
              style={{
                fontFamily: 'Arial, sans-serif',
                maxWidth: '100%',
                margin: '0 auto',
                borderRadius: '1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                color: '#333333',
                textAlign: 'left',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                <img
                  src={Logo}
                  alt="Logo"
                  crossOrigin="anonymous"
                  style={{ height: '50px', objectFit: 'contain', alignSelf: 'center' }}
                />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.875rem', color: '#9ca3af', margin: 0 }}>Booking Reference:</p>
                  <h4 style={{ fontSize: '0.8rem', fontWeight: '700', color: '#3b82f6', margin: 0 }}>{ticketData.bookingId}</h4>
                </div>
              </div>
              <hr style={{ border: 'none', borderBottom: '1px solid #e5e7eb', margin: '1rem 0' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', fontSize: '0.875rem', lineHeight: '1.5' }}>
                <div>
                  <p style={{ color: '#9ca3af', margin: 0 }}>Full Name</p>
                  <p style={{ fontWeight: '500', margin: 0 }}>{ticketData.name}</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', margin: 0 }}>Email</p>
                  <p style={{ fontWeight: '500', margin: 0 }}>{ticketData.email}</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', margin: 0 }}>Destination</p>
                  <p style={{ fontWeight: '500', margin: 0 }}>{ticketData.destination}</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', margin: 0 }}>Total Price</p>
                  <p style={{ fontWeight: '500', margin: 0 }}>${ticketData.price}</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', margin: 0 }}>Check-In</p>
                  <p style={{ fontWeight: '500', margin: 0 }}>{ticketData.checkIn}</p>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', margin: 0 }}>Check-Out</p>
                  <p style={{ fontWeight: '500', margin: 0 }}>{ticketData.checkOut}</p>
                </div>
              </div>
              <hr style={{ border: 'none', borderBottom: '1px solid #e5e7eb', margin: '1rem 0' }} />
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center' }}>
                Please present this ticket during check-in. Enjoy your trip!
              </p>
              <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem'
              }}>
                <QRCodeSVG 
                  value={ticketData.bookingId}
                  size={96}
                  level="H"
                  includeMargin={false}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={() => downloadTicket('pdf')}
                disabled={isDownloading}
                style={{
                  backgroundColor: '#10B981',
                  color: '#ffffff',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: isDownloading ? 'not-allowed' : 'pointer',
                  justifyContent: 'center'
                }}
              >
                <FaDownload />
                {isDownloading ? 'Generating...' : 'Download PDF'}
              </button>
              <button
                onClick={() => downloadTicket('image')}
                disabled={isDownloading}
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: isDownloading ? 'not-allowed' : 'pointer',
                  justifyContent: 'center'
                }}
              >
                <FaDownload />
                {isDownloading ? 'Generating...' : 'Download Image'}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#ffffff', margin: '0.5rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '32rem', padding: '1.5rem', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            color: '#9ca3af',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <img src={Logo} alt="logo" style={{ height: '3rem' }} />
        </div>
        {currentStep < 3 && (
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>{destination.name}</h2>
            <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>${destination.price}/3 days</p>
          </div>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {renderFormStep()}
          {currentStep < 3 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  style={{
                    backgroundColor: '#e5e7eb',
                    color: '#374151',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  opacity: isLoading ? 0.75 : 1
                }}
              >
                {isLoading ? 'Processing...' : (currentStep === 2 ? 'Confirm Payment' : 'Continue')}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingStepper;
