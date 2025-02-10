# TheraConnect - Therapy Marketplace Platform Prototype

A rapid prototype of a marketplace platform connecting therapists with clients, featuring video sessions and payment processing.

## Features

- **Therapist Profiles:** Browse detailed therapist profiles with specialties, bios, and availability
- **Search Functionality:** Find therapists by name or specialty
- **Booking System:** Select available time slots and schedule sessions
- **Video Sessions:** Simulated video session links for remote therapy
- **Payment Processing:** Mock payment flow with success confirmation

## Technical Implementation

### Architecture
- Built using React with modern hooks
- Styled  CSS
- Simulated backend with mock data

### AI Tools Used
1. **UI Generation:** Leveraged AI to generate the component structure and styling(https://jitsi.org/api/)
2. **Mock Data:** Generated realistic therapist profiles and availability data
3. **Payment Flow:** Created a simulated payment processing system

### Key Components
1. `TheraConnect.js` - Main application component with therapist listing
2. `BookingModal.js` - Session scheduling interface
3. `PaymentModal.js` - Payment processing interface

## Assumptions & Shortcuts

1. **Data Storage:** Using static mock data instead of a backend database
2. **Authentication:** Not implemented in this prototype
3. **Video Integration:** Simulated with mock session links
4. **Payment Processing:** Mocked payment flow without actual payment gateway
5. **Availability:** Simple availability system without real-time updates

## Future Enhancements

1. **Backend Integration:** Add real database and API endpoints
2. **Authentication:** Implement user accounts and login
3. **Real Video Integration:** Integrate actual video conferencing API
4. **Payment Gateway:** Add real payment processing
5. **Advanced Search:** Add filters for price, availability, and insurance
6. **Reviews System:** Add ability for clients to leave reviews

## Setup & Running

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Technologies Used

- React
- Lucide Icons