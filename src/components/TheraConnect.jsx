import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Calendar icon import
import BookingModal from './BookingModal'; // Import your modal component
import PaymentModal from './PaymentModal'; // Import your modal component
import TherapistRegistration from './TherapistRegistration'; // Import TherapistRegistration component

// Initial data for demonstration
const initialTherapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Anxiety & Depression",
    bio: "Licensed clinical psychologist with 10+ years experience in CBT and mindfulness-based therapy.",
    rate: 120,
    availability: ["Monday", "Wednesday", "Friday"],
    rating: 4.9,
    imageUrl: "/images/woman.png"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Relationship Counseling",
    bio: "Marriage and family therapist specializing in couples therapy and relationship dynamics.",
    rate: 140,
    availability: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.8,
    imageUrl: "/images/profile.png"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Trauma & PTSD",
    bio: "Trauma specialist with expertise in EMDR and somatic experiencing approaches base therapy",
    rate: 130,
    availability: ["Monday", "Tuesday", "Thursday"],
    rating: 4.9,
    imageUrl: "/images/woman.png"
  }
];

const TheraConnect = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [sessionDetails, setSessionDetails] = useState(null);
  const [therapists, setTherapists] = useState(initialTherapists);
  const [showRegistration, setShowRegistration] = useState(false);

  const filteredTherapists = therapists.filter(therapist =>
    therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    therapist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookingConfirm = (session) => {
    setSessionDetails(session);
    setShowBooking(false);
    setShowPayment(true);
  };

  const handlePaymentConfirm = (paymentDetails) => {
    console.log('Payment successful:', paymentDetails);
    setShowPayment(false);
  };

  // Save new therapist profile
  const saveTherapistProfile = (newTherapistData) => {
    setTherapists(prevTherapists => [
      ...prevTherapists,
      { ...newTherapistData, id: prevTherapists.length + 1 }
    ]);
    setShowRegistration(false); 
  };

  return (
    <div className="thera-connect-container">
      <header className="header">
        <h1 className="title">TheraConnect</h1>
        <p className="subheading">Find and connect with licensed therapists online</p>
        <button onClick={() => setShowRegistration(true)}>Become a Therapist</button>
      </header>

     
      {showRegistration && <TherapistRegistration onSave={saveTherapistProfile} />}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by specialty or therapist name..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="therapist-grid">
        {filteredTherapists.map(therapist => (
          <div key={therapist.id} className="therapist-card">
            <div className="card-header">
              <img src={therapist.imageUrl} alt={therapist.name} className="therapist-image" />
              <h2 className="card-title">{therapist.name}</h2>
              <p className="card-description">{therapist.specialty}</p>
            </div>
            <div className="card-content">
              <p className="therapist-bio">{therapist.bio}</p>
              <div className="availability-rate">
                <span className="availability">
                  <FaCalendarAlt className="calendar-icon" />
                  {therapist.availability.join(', ')}
                </span>
                <span className="rate">${therapist.rate}/hr</span>
              </div>
              <button
                onClick={() => {
                  setSelectedTherapist(therapist);
                  setShowBooking(true); 
                }}
                className="book-session-button"
              >
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {showBooking && selectedTherapist && (
        <BookingModal
          therapist={selectedTherapist}
          onClose={() => setShowBooking(false)}
          onConfirm={handleBookingConfirm}
        />
      )}
      {showPayment && sessionDetails && (
        <PaymentModal
          sessionDetails={sessionDetails}
          onClose={() => setShowPayment(false)}
          onConfirm={handlePaymentConfirm}
        />
      )}
    </div>
  );
};

export default TheraConnect;
