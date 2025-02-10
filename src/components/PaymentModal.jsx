import React, { useState } from 'react';
import { CreditCard, Check } from 'lucide-react';

const PaymentModal = ({ sessionDetails, onClose, onConfirm }) => {
  const [processing, setProcessing] = useState(false);
  const [complete, setComplete] = useState(false);

  // Function to generate a mock video session link
  const generateSessionLink = () => {
    return `https://meet.jit.si/TheraConnect-${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setProcessing(false);
    setComplete(true);

    // Simulate success callback after showing success message
    setTimeout(() => {
      onConfirm({
        ...sessionDetails,
        paymentId: Math.random().toString(36).substr(2, 9),
        status: 'confirmed',
        sessionLink: generateSessionLink(), // Add session link
      });
    }, 1500);
  };

  return (
    <div className="payment-modal">
      <div className="payment-modal-content">
        {!complete ? (
          <>
            <h2 className="payment-modal-title">Complete Payment</h2>
            <div className="session-details">
              <h3 className="session-details-title">Session Details</h3>
              <div className="session-info">
                <p className="session-info-text">Therapist: {sessionDetails.therapist.name}</p>
                <p className="session-info-text">Date: {sessionDetails.date}</p>
                <p className="session-info-text">Time: {sessionDetails.time}</p>
                <p className="session-info-amount">Amount: ${sessionDetails.amount}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label">Card Number</label>
                <div className="input-container">
                  <CreditCard className="icon" />
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="input"
                    required
                    pattern="[0-9\s]{16,19}"
                  />
                </div>
              </div>

              <div className="expiry-cvv-container">
                <div className="expiry-cvv-item">
                  <label className="label">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="input"
                    required
                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  />
                </div>
                <div className="expiry-cvv-item">
                  <label className="label">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="input"
                    required
                    pattern="[0-9]{3,4}"
                  />
                </div>
              </div>

              <div className="button-group">
                <button
                  type="button"
                  onClick={onClose}
                  className="cancel-button"
                  disabled={processing}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="continue-button"
                  disabled={processing}
                >
                  {processing ? (
                    <span>Processing...</span>
                  ) : (
                    'Complete Payment'
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="payment-success">
            <div className="check-icon-container">
              <Check className="check-icon" />
            </div>
            <h2 className="payment-success-title">Payment Successful!</h2>
            <p className="payment-success-message">
              Your session has been confirmed. Check your email for the video session link.
            </p>
            <p className="session-link">
              <a href={sessionDetails.sessionLink} target="_blank" rel="noopener noreferrer">
                Join Session
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
