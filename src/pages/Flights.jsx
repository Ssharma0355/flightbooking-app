import React, { useState, useRef } from 'react';
import SideMenu from '../components/SideMenu';
import { TextField, Button, Box } from '@mui/material';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

function Flights() {
  const [passengers, setPassengers] = useState([{ firstName: '', lastName: '', email: '' }]);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  // Add a new passenger
  const addPassenger = () => {
    setPassengers([...passengers, { firstName: '', lastName: '', email: '' }]);
  };

  // Remove a passenger
  const removePassenger = (index) => {
    const updatedPassengers = passengers.filter((_, i) => i !== index);
    setPassengers(updatedPassengers);
  };

  // Handle Webcam Capture
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsWebcamOpen(false);
  };

  const handleNext = () => {
    if (passengers.length && capturedImage) {
      navigate(`/selectseat`);
    } else {
      alert("Please provide all details");
    }
  };

  return (
    <div className="home-page">
      <SideMenu />
      <div className="content">
        <h2>Passenger Details</h2>

        {/* Passenger Form Grid */}
        {passengers.map((passenger, index) => (
          <Box key={index} className="passenger-form-grid">
            <TextField
              label="First Name"
              value={passenger.firstName}
              onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              value={passenger.lastName}
              onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={passenger.email}
              onChange={(e) => handleInputChange(index, 'email', e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removePassenger(index)}
              style={{ marginTop: '10px' }}
            >
              Remove Passenger
            </Button>
          </Box>
        ))}

        {/* Add Passenger Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={addPassenger}
          style={{ margin: '10px 0' }}
        >
          Add Passenger
        </Button>

        {/* Webcam Section */}
        <div className="webcam-section">
          {isWebcamOpen ? (
            <div>
              <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                style={{ width: '100%', height: 'auto' }}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={capture}
                style={{ marginTop: '10px' }}
              >
                Capture Image
              </Button>
            </div>
          ) : (
            <Button
              variant="contained"
              color="success"
              onClick={() => setIsWebcamOpen(true)}
              style={{ marginTop: '10px' }}
            >
              Open Webcam
            </Button>
          )}

          {/* Display Captured Image */}
          {capturedImage && (
            <div className="captured-image">
              <h4>Captured Image:</h4>
              <img
                src={capturedImage}
                alt="Captured"
                style={{ width: '200px', marginTop: '10px' }}
              />
            </div>
          )}
        </div>

        {/* Next Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Flights;
