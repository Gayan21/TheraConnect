import React, { useState } from 'react';

const TherapistRegistration = ({ onSave }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [bio, setBio] = useState('');
  const [rate, setRate] = useState('');
  const [availability, setAvailability] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTherapist = {
      name,
      specialty,
      bio,
      rate: parseFloat(rate),
      availability: availability.split(',').map(day => day.trim()),
      rating: 5,  
      imageUrl: '/images/default.png', // Default image
    };

    // Call the onSave function passed from parent component (TheraConnect)
    onSave(newTherapist);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: '#1d4ed8' }}>Therapist Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="specialty" style={{ display: 'block', fontWeight: 'bold' }}>Specialty</label>
          <input
            type="text"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="bio" style={{ display: 'block', fontWeight: 'bold' }}>Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="rate" style={{ display: 'block', fontWeight: 'bold' }}>Hourly Rate</label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="availability" style={{ display: 'block', fontWeight: 'bold' }}>Availability (Comma separated)</label>
          <input
            type="text"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#1d4ed8', color: 'white', fontSize: '1rem', cursor: 'pointer', border: 'none' }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default TherapistRegistration;
