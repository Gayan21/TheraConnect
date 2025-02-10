import React, { useState } from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const BookingModal = ({ therapist, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mock video session link
    const sessionLink = `https://theraconnect.video/${Math.random().toString(36).substr(2, 9)}`;
    onConfirm({
      therapist,
      date: selectedDate,
      time: selectedTime,
      sessionLink,
      amount: therapist.rate
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Book Session with {therapist.name}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Select Date</label>
            <div className="input-container">
              <Calendar className="icon" />
              <input
                type="date"
                className="input"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">Select Time</label>
            <div className="time-grid">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="button-group">
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="continue-button"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
