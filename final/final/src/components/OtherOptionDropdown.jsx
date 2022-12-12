import React, { useState } from 'react';
import '../static/css/Dropdown.css'
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Male');
  const [otherOption, setOtherOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOtherOptionChange = (event) => {
    setOtherOption(event.target.value);
  };

  return (
    <div className="subscribe-gender">
      <label aria-label='select your gender'>
        <span>Please select your Gender:</span>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="none">Please Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      {selectedOption === 'other' && (
        <div className='other-option'>
        <label aria-label='other option'>
          <span>Please specify:</span>
          <input
            id="other-option"
            value={otherOption}
            onChange={handleOtherOptionChange}
          />
        </label>
        </div>
      )}
    </div>
  );
};
export default Dropdown;