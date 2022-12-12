import React, { useState } from 'react';
import '../static/css/Dropdown.css'
const MultySelectDropdown = () => {
  const [type, setType] = useState('none');
  const [specifyType, setSpecifyType] = useState('none');

  const types = {
    none: ['Please Select'],
    sports: ['basketball', 'football', 'swimming'],
    games: ['console game', 'online game'],
    others: ['travel', 'eat', 'sleep', 'watch films'],
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setSpecifyType(types[event.target.value][0]);
  };

  const handleSpecifyTypeChange = (event) => {
    setSpecifyType(event.target.value);
  };

  return (
    <div className='multy-select-dropdown'>
      <div className='multy-select-dropdown-hobby'>
        <label aria-label="select your hobby">
          Please select your hobby:
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
          >
            <option value="none">Please Select</option>
            <option value="sports">sports</option>
            <option value="games">games</option>
            <option value="others">others</option>
          </select>
        </label>
      </div>
      <div className='multy-select-dropdown-specify-type'>
        <label aria-label="select your specify type">
          Please select a specify hobby:
          <select
            id="specifyType"
            value={specifyType}
            onChange={handleSpecifyTypeChange}
          >
            {types[type].map((specifyType) => (
              <option key={specifyType} value={specifyType}>{specifyType}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default MultySelectDropdown;