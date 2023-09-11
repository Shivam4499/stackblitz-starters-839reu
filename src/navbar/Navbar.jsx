import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your custom CSS for Navbar

function DropdownContent({
  selectAll,
  handleHotelSelection,
  eligibleHotels,
  selectedHotels,
  fetchMarketGraphData,
}) {
  return (
    <div className="dropdown-content">
      <div>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={() => handleHotelSelection('selectAll')}
        />
        Select All
      </div>
      <div>
        <input
          type="checkbox"
          checked={!selectAll}
          onChange={() => handleHotelSelection('unselectAll')}
        />
        Unselect All
      </div>
      {eligibleHotels.map((hotel) => (
        <div key={hotel}>
          <input
            type="checkbox"
            checked={selectedHotels.includes(hotel)}
            onChange={() => handleHotelSelection(hotel)}
          />
          {hotel}
        </div>
      ))}
      <button className="custom-button" onClick={fetchMarketGraphData}>
        Update Chart
      </button>
    </div>
  );
}

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedHotels, setSelectedHotels] = useState([]);
  const [eligibleHotels, setEligibleHotels] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleHotelSelection = (hotel) => {
    // Implement your hotel selection logic here
    // ... (Existing code)
  };

  const fetchMarketGraphData = () => {
    // Implement your data fetching logic here
    // ... (Existing code)
  };

  useEffect(() => {
    // Fetch eligible hotels when the component mounts
    fetch('https://www.mfamanagement.co.in/eligible_hotels')
      .then((response) => response.json())
      .then((hotels) => {
        // Sort and set the eligible hotels
        setEligibleHotels(hotels.sort());
        // Initially, select all hotels
        setSelectedHotels(hotels);
      })
      .catch((error) =>
        console.error('Error fetching eligible hotels:', error)
      );
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="header-title">RevAnalytica</h1>
      </div>
      <div className="navbar-right">
        <div className="button-container">
          <button className="custom-button" onClick={toggleDropdown}>
            Select Hotels
          </button>
        </div>
        {showDropdown && (
          <DropdownContent
            selectAll={selectAll}
            handleHotelSelection={handleHotelSelection}
            eligibleHotels={eligibleHotels}
            selectedHotels={selectedHotels}
            fetchMarketGraphData={fetchMarketGraphData}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
