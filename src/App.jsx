
// import React, { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Pie,Bar } from 'react-chartjs-2';

// import DATA from './hierarchical_combined.json';
// import './App.css';
// import Dropdown from './Dropdown';

// import './App.css';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '40px',
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//     minHeight: '100%',  // Set minimum height to 100%
//     width: '100%',  // Set width to 100%
//   },
//   chartContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '20px',
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//   },
//   header: {
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     padding: '15px 0',
//     textAlign: 'center',
//     fontSize: '24px',
//     marginBottom: '40px',
//     fontFamily: 'Arial, sans-serif',
//     width: '100%',
//   },
// };


// const PieChartComponent = ({ title, data }) => (
//   <div >
//     <h2>{title}</h2>
//     <Bar options={options} data={data} />
//   </div>
// );




// const App = () => {
//   const yearList = [2018, 2019, 2020, 2021, 2022];
//   const [currentYear, setCurrentYear] = useState(2020);
//   const [currentQuarter, setCurrentQuarter] = useState(0);
//   const [finalData, setFinalData] = useState(null);

//   useEffect(() => {
//     const key = `${currentYear}_Q${currentQuarter + 1}`;
//     const currentFileName = `${currentQuarter + 1}.json`;
//     const data = DATA.transaction.hover.country.india[currentYear][currentFileName];
//     setFinalData(data);
//   }, [currentYear, currentQuarter]);

//   let labels = [];
//   let pieChartData = [];

//   if (finalData && finalData.data && finalData.data.hoverDataList) {
//     finalData.data.hoverDataList.forEach(stateData => {
//       labels.push(stateData.name);
//       pieChartData.push(stateData.metric[0].count);
//     });
//   }

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: '# of Types',
//         data: pieChartData,
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//     ],
//   };
//   return (
//     <div >
//       <div >PhonePe Data Dashboard</div>
//       <Dropdown 
//         yearList={yearList} 
//         currentYear={currentYear} 
//         setCurrentYear={setCurrentYear}
//         currentQuarter={currentQuarter}
//         setCurrentQuarter={setCurrentQuarter}
//       />
//       <PieChartComponent title="Region Data" data={chartData} />
//     </div>
//   );


   
// };

// export default App;







// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const App = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Sales (in USD)',
//         data: [1200, 1900, 3000, 4900, 4000],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.5)',
//           'rgba(54, 162, 235, 0.5)',
//           'rgba(255, 206, 86, 0.5)',
//           'rgba(75, 192, 192, 0.5)',
//           'rgba(153, 102, 255, 0.5)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div className="App">
//       <h1>Vertical Bar Graph Example</h1>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DATA from './hierarchical_combined.json';
import './App.css';
import Dropdown from './Dropdown';

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
      },
      chartContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
      },
      header: {
        backgroundColor: '#333',  // dark background
        color: '#fff',  // white text
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '40px',  // space between the header and the charts
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'  // subtle shadow for depth
    
  // ... (same as before)
      }
};


const PieChartComponent = ({ title, data }) => (
  <div style={styles.chartContainer}>
    <h2>{title}</h2>
    <Pie data={data} />
  </div>
);

const App = () => {
  const yearList = [2018, 2019, 2020, 2021, 2022];
  const [currentYear, setCurrentYear] = useState(2020);
  const [currentQuarter, setCurrentQuarter] = useState(0);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    const key = `${currentYear}_Q${currentQuarter + 1}`;
    const currentFileName = `${currentQuarter + 1}.json`;
    const data = DATA.transaction.hover.country.india[currentYear][currentFileName];
    setFinalData(data);
  }, [currentYear, currentQuarter]);

  let labels = [];
  let pieChartData = [];

  if (finalData && finalData.data && finalData.data.hoverDataList) {
    finalData.data.hoverDataList.forEach(stateData => {
      labels.push(stateData.name);
      pieChartData.push(stateData.metric[0].count);
    });
  }

  

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: '# of Types',
        data: pieChartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={styles.header}>PhonePe Data Dashboard</div>
      <Dropdown yearList={yearList} currentYear={currentYear} setCurrentYear={setCurrentYear}  setCurrentQuarter={setCurrentQuarter}/>
      <div style={styles.container}>
        <PieChartComponent title="Region Data" data={chartData} />
      </div>
    </div>
  );
};

export default App;