import React, { useState } from 'react';

function Dropdown({ yearList, currentYear, setCurrentYear}) {
  const [isOpen, setIsOpen] = useState(false);
    
//const yearListItems = yearList.map(year => <li onClick={() => setCurrentYear(year)}>{year}</li>);
const yearListItems = yearList.map(year => <li key={year} onClick={() => setCurrentYear(year)}>{year}</li>);

  console.log(yearList); 
  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        Years
      </button>
      {isOpen && (
        <ul >
            {yearListItems}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
