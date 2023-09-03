// import React from 'react';
// import PropTypes from 'prop-types';

// const styles = {
//   dropdownContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '20px',
//     marginBottom: '30px',
//   },
//   label: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: 'black',  
//     fontWeight: 'bold'
//   },
//   select: {
//     padding: '10px',
//     fontSize: '16px',
    
//   },
// };

// function Dropdown({ yearList, currentYear, setCurrentYear, currentQuarter, setCurrentQuarter }) {
//   const quarterList = ['Q1', 'Q2', 'Q3', 'Q4'];

//   return (
//     <div>
//       <div>
//         <label style={styles.label}>Year: </label>
//         <select style={styles.select} value={currentYear} onChange={(e) => setCurrentYear(Number(e.target.value))}>
//           {yearList.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label style={styles.label}>Quarter: </label>
//         <select style={styles.select} value={currentQuarter} onChange={(e) => setCurrentQuarter(Number(e.target.value))}>
//           {quarterList.map((quarter, index) => (
//             <option key={quarter} value={index}>
//               {quarter}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// Dropdown.propTypes = {
//   yearList: PropTypes.array.isRequired,
//   currentYear: PropTypes.number.isRequired,
//   setCurrentYear: PropTypes.func.isRequired,
//   currentQuarter: PropTypes.number.isRequired,
//   setCurrentQuarter: PropTypes.func.isRequired,
// };

// export default Dropdown;




import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '30px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
  },
  select: {
    padding: '12px 16px',
    fontSize: '18px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

function Dropdown({ yearList, currentYear, setCurrentYear, currentQuarter, setCurrentQuarter }) {
  const quarterList = ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <div style={styles.dropdownContainer}>
      <div>
        <label style={styles.label}>Year: </label>
        <select style={styles.select} value={currentYear} onChange={(e) => setCurrentYear(Number(e.target.value))}>
          {yearList.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label style={styles.label}>Quarter: </label>
        <select style={styles.select} value={currentQuarter} onChange={(e) => setCurrentQuarter(Number(e.target.value))}>
          {quarterList.map((quarter, index) => (
            <option key={quarter} value={index}>
              {quarter}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  yearList: PropTypes.array.isRequired,
  currentYear: PropTypes.number.isRequired,
  setCurrentYear: PropTypes.func.isRequired,
  currentQuarter: PropTypes.number.isRequired,
  setCurrentQuarter: PropTypes.func.isRequired,
};

export default Dropdown;
