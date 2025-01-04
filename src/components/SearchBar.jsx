import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import airportsData from '../data/airports.json';
import '../styles/SearchBar.css';
import { Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material';

function SearchBar() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (from && to && date) {
      navigate(`/passangerdetails?from=${from}&to=${to}&date=${date}`);
    } else {
      alert('Please fill From, To, and Date fields.');
    }
  };

  return (
    <div className='search-bar'>
      {/* From Dropdown */}
      <div>
        <FormControl fullWidth margin="normal">
          <InputLabel id="from-airport-label">From Airport</InputLabel>
          <Select
            labelId="from-airport-label"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {airportsData.map((airport) => (
              <MenuItem key={airport.id} value={airport.code}>
                {airport.name} ({airport.code}) - {airport.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth margin="normal">
          <InputLabel id="to-airport-label">To Airport</InputLabel>
          <Select
            labelId="to-airport-label"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {airportsData.map((airport) => (
              <MenuItem key={airport.id} value={airport.code}>
                {airport.name} ({airport.code}) - {airport.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
 

      {/* To Dropdown */}
   

      {/* Date Picker */}
      <div className='datePicker'>
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </div>
    

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        fullWidth
        style={{ marginTop: '10px' }}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
