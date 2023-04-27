import React, { useState } from 'react';
import './SeatSelection.css';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];

    for (let i = 1; i <= 50; i++) {
      const isSeatSelected = selectedSeats.includes(i);
      const seatClassNames = `seat ${isSeatSelected ? 'selected' : ''}`;

      seats.push(
        <div key={i} className={seatClassNames} onClick={() => handleSeatClick(i)}>
          {i}
        </div>
      );
    }

    return seats;
  };

  return (
    <div className="seat-selection-container">
      <h1>Seat Selection</h1>
      <div className="screen">Screen This Way</div>
      <div className="seats">{renderSeats()}</div>
      <button className="btn btn-primary mt-3">Book Now</button>
    </div>
  );
};

export default SeatSelection ;
