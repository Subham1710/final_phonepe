import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({ yearList, currentYear, setCurrentYear }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const yearListItems = yearList.map(year => (
    <li key={year} onClick={() => setCurrentYear(year)}>
      {year}
    </li>
  ));

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isOpen}>
        Years
      </button>
      {isOpen && (
        <ul aria-label="Year List">
          {yearListItems}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  yearList: PropTypes.array.isRequired,
  currentYear: PropTypes.number.isRequired,
  setCurrentYear: PropTypes.func.isRequired,
};

export default Dropdown;
