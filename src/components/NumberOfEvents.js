import { useState } from "react";

const NumberOfEvents = ({ setNumberOfEvents, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumber(value);
    setNumberOfEvents(value === '' ? 0 : parseInt(value, 10));

    if (isNaN(value) || value <= 0) {
      setErrorAlert("Only positive numbers are allowed");
    } else {
      setErrorAlert("");
      setNumberOfEvents(value === '' ? 0 : parseInt(value, 10));
    }
  };

  return (
    <div className="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        id="number-of-events-input"
        type="number"
        value={number}
        onChange={handleInputChange}
        role="textbox"
      />
    </div>
  );
};

export default NumberOfEvents;
