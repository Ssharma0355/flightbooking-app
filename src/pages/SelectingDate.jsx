import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import flightImage from '../assets/flight.png'; // Replace with the path to your flight image
import  "../styles/SelectingSeat.css"

function SelectingDate() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Seat data
  const generateSeats = (rowCount, seatsPerRow) => {
    const rows = [];
    for (let i = 1; i <= rowCount; i++) {
      const row = [];
      for (let j = 0; j < seatsPerRow; j++) {
        row.push(`${i}${String.fromCharCode(65 + j)}`); // Generates seat codes like 1A, 1B, etc.
      }
      rows.push(row);
    }
    return rows;
  };

  const seats = generateSeats(9, 4); 

  // Toggle seat selection
  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat) // Deselect seat
        : [...prev, seat] // Select seat
    );
  };

  return (
    <div className="home-page">
      <SideMenu />
      <div className="content">
        <h2>Choose Your Seat</h2>

        {/* Flight Image */}
        <div className="flight-image">
          <img
          className='flight-img'
            src={flightImage}
            alt="Flight"
            style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
          />
        </div>

        {/* Seat Selection */}
        <div className="flight-seat">
          {seats.map((row, rowIndex) => (
            <div className="seat-row" key={rowIndex}>
              {row.map((seat) => (
                <div
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Selected Seats */}
        <div className="selected-seats">
          <h4>Selected Seats:</h4>
          {selectedSeats.length > 0 ? (
            <p>{selectedSeats.join(', ')}</p>
          ) : (
            <p>No seats selected</p>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .flight-seat {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 40px;
          }

          .seat-row {
            display: flex;
            justify-content: center;
            gap: 10px;
          }

          .seat {
            width: 50px;
            height: 50px;
            border: 2px solid #ccc;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .seat.selected {
            background-color: #4caf50;
            color: white;
            border-color: #388e3c;
          }

          .seat:hover {
            background-color: #e0e0e0;
          }

          .selected-seats {
            margin-top: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default SelectingDate;
